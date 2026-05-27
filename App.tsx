import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ocorrencia } from "./src/types/ocorrencia";
import { mockOcorrencias } from "./src/data/mockOcorrencias";
import { ListaOcorrenciasScreen } from "./src/screens/ListaOcorrenciasScreen";
import { CadastroOcorrenciaScreen } from "./src/screens/CadastroOcorrenciaScreen";
import { DetalheOcorrenciaScreen } from "./src/screens/DetalheOcorrenciaScreen";

type TelaAtual = "lista" | "cadastro" | "detalhe";

const STORAGE_KEY = "@verdescan_ocorrencias";

export default function App() {
  const [telaAtual, setTelaAtual] = useState<TelaAtual>("lista");
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(mockOcorrencias);
  const [ocorrenciaSelecionada, setOcorrenciaSelecionada] =
    useState<Ocorrencia | null>(null);

  useEffect(() => {
    carregarOcorrencias();
  }, []);

  async function carregarOcorrencias() {
    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

      if (dadosSalvos) {
        setOcorrencias(JSON.parse(dadosSalvos));
      }
    } catch (error) {
      console.log("Erro ao carregar ocorrências:", error);
    }
  }

  async function salvarListaNoStorage(listaAtualizada: Ocorrencia[]) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(listaAtualizada)
      );
    } catch (error) {
      console.log("Erro ao salvar ocorrências:", error);
    }
  }

  function abrirDetalhe(ocorrencia: Ocorrencia) {
    setOcorrenciaSelecionada(ocorrencia);
    setTelaAtual("detalhe");
  }

  function voltarParaLista() {
    setOcorrenciaSelecionada(null);
    setTelaAtual("lista");
  }

  function salvarOcorrencia(novaOcorrencia: Omit<Ocorrencia, "id">) {
    const novoId =
      ocorrencias.length > 0
        ? Math.max(...ocorrencias.map((item) => item.id)) + 1
        : 1;

    const ocorrenciaCompleta: Ocorrencia = {
      id: novoId,
      ...novaOcorrencia,
    };

    const listaAtualizada = [ocorrenciaCompleta, ...ocorrencias];

    setOcorrencias(listaAtualizada);
    salvarListaNoStorage(listaAtualizada);
    setTelaAtual("lista");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#064e2f" />

      {telaAtual === "lista" && (
        <ListaOcorrenciasScreen
          ocorrencias={ocorrencias}
          onNovaOcorrencia={() => setTelaAtual("cadastro")}
          onSelecionarOcorrencia={abrirDetalhe}
        />
      )}

      {telaAtual === "cadastro" && (
        <CadastroOcorrenciaScreen
          onVoltar={voltarParaLista}
          onSalvar={salvarOcorrencia}
        />
      )}

      {telaAtual === "detalhe" && ocorrenciaSelecionada && (
        <DetalheOcorrenciaScreen
          ocorrencia={ocorrenciaSelecionada}
          onVoltar={voltarParaLista}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef7ef",
  },
});