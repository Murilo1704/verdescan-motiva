import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ocorrencia, Risco } from "../types/ocorrencia";

type Props = {
  onVoltar: () => void;
  onSalvar: (ocorrencia: Omit<Ocorrencia, "id">) => void;
};

export function CadastroOcorrenciaScreen({ onVoltar, onSalvar }: Props) {
  const [rodovia, setRodovia] = useState("");
  const [quilometro, setQuilometro] = useState("");
  const [equipe, setEquipe] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [risco, setRisco] = useState<Risco>("baixo");
  const [mensagemErro, setMensagemErro] = useState("");

  function salvar() {
    if (!rodovia) {
      setMensagemErro("Preencha a rodovia antes de salvar.");
      return;
    }

    if (!quilometro) {
      setMensagemErro("Preencha o quilômetro antes de salvar.");
      return;
    }

    if (!equipe) {
      setMensagemErro("Preencha a equipe responsável antes de salvar.");
      return;
    }

    if (!data) {
      setMensagemErro("Preencha a data antes de salvar.");
      return;
    }

    if (!descricao) {
      setMensagemErro("Preencha a descrição da ocorrência antes de salvar.");
      return;
    }

    const localFormatado = `${rodovia} - KM ${quilometro}`;
    const descricaoFormatada = `${descricao} | Equipe responsável: ${equipe}`;

    onSalvar({
      local: localFormatado,
      descricao: descricaoFormatada,
      risco,
      data,
    });

    setRodovia("");
    setQuilometro("");
    setEquipe("");
    setData("");
    setDescricao("");
    setRisco("baixo");
    setMensagemErro("");
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.header}>
        <Pressable onPress={onVoltar}>
          <Text style={styles.voltar}>Voltar</Text>
        </Pressable>

        <Text style={styles.titulo}>Nova ocorrência</Text>
        <Text style={styles.subtitulo}>
          Registre uma nova vistoria de vegetação
        </Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Rodovia</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: SP-280"
          value={rodovia}
          onChangeText={setRodovia}
        />

        <Text style={styles.label}>Quilômetro</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 42"
          value={quilometro}
          onChangeText={setQuilometro}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Equipe responsável</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Equipe Roçada 02"
          value={equipe}
          onChangeText={setEquipe}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 22/05/2026"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.label}>Descrição da ocorrência</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ex: Vegetação alta próxima à placa de sinalização"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <Text style={styles.label}>Classificação de risco</Text>

        <View style={styles.opcoesRisco}>
          <Pressable
            style={[
              styles.riscoBotao,
              risco === "baixo" && styles.riscoBaixoSelecionado,
            ]}
            onPress={() => setRisco("baixo")}
          >
            <Text
              style={[
                styles.riscoTexto,
                risco === "baixo" && styles.riscoTextoSelecionado,
              ]}
            >
              Baixo
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.riscoBotao,
              risco === "medio" && styles.riscoMedioSelecionado,
            ]}
            onPress={() => setRisco("medio")}
          >
            <Text
              style={[
                styles.riscoTexto,
                risco === "medio" && styles.riscoTextoSelecionado,
              ]}
            >
              Médio
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.riscoBotao,
              risco === "alto" && styles.riscoAltoSelecionado,
            ]}
            onPress={() => setRisco("alto")}
          >
            <Text
              style={[
                styles.riscoTexto,
                risco === "alto" && styles.riscoTextoSelecionado,
              ]}
            >
              Alto
            </Text>
          </Pressable>
        </View>

        {mensagemErro !== "" && (
          <Text style={styles.mensagemErro}>{mensagemErro}</Text>
        )}

        <Pressable style={styles.botaoSalvar} onPress={salvar}>
          <Text style={styles.botaoSalvarTexto}>Salvar ocorrência</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: "#064e2f",
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 26,
  },
  voltar: {
    color: "#d5f5de",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 16,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800",
  },
  subtitulo: {
    color: "#d5f5de",
    fontSize: 14,
    marginTop: 6,
  },
  formulario: {
    padding: 16,
  },
  label: {
    color: "#123727",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c8ddcb",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#0f2f20",
    fontSize: 15,
    minHeight: 46,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  opcoesRisco: {
    flexDirection: "row",
    gap: 10,
  },
  riscoBotao: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c8ddcb",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
  },
  riscoBaixoSelecionado: {
    backgroundColor: "#159447",
    borderColor: "#159447",
  },
  riscoMedioSelecionado: {
    backgroundColor: "#d4a106",
    borderColor: "#d4a106",
  },
  riscoAltoSelecionado: {
    backgroundColor: "#d93636",
    borderColor: "#d93636",
  },
  riscoTexto: {
    color: "#244738",
    fontWeight: "700",
  },
  riscoTextoSelecionado: {
    color: "#ffffff",
  },
  mensagemErro: {
    color: "#d93636",
    fontWeight: "700",
    marginTop: 16,
    textAlign: "center",
  },
  botaoSalvar: {
    backgroundColor: "#058f35",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 28,
  },
  botaoSalvarTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
});