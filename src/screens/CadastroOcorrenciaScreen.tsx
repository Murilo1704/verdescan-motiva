import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ocorrencia, Risco } from "../types/ocorrencia";

type Props = {
  onVoltar: () => void;
  onSalvar: (novaOcorrencia: Omit<Ocorrencia, "id">) => void;
};

export function CadastroOcorrenciaScreen({ onVoltar, onSalvar }: Props) {
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [equipe, setEquipe] = useState("");
  const [tipoIntervencao, setTipoIntervencao] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [observacao, setObservacao] = useState("");
  const [risco, setRisco] = useState<Risco>("baixo");

  function salvar() {
    if (
      descricao.trim() === "" ||
      local.trim() === "" ||
      equipe.trim() === "" ||
      tipoIntervencao.trim() === ""
    ) {
      Alert.alert(
        "Atenção",
        "Preencha descrição, local, equipe e tipo de intervenção."
      );
      return;
    }

    onSalvar({
      descricao,
      local,
      risco,
      data: new Date().toLocaleDateString("pt-BR"),
      equipe,
      tipoIntervencao,
      status,
      observacao,
    });

    setDescricao("");
    setLocal("");
    setEquipe("");
    setTipoIntervencao("");
    setStatus("Pendente");
    setObservacao("");
    setRisco("baixo");
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastrar ocorrência</Text>

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Vegetação alta próxima ao acostamento"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: SP-280 - KM 42"
          value={local}
          onChangeText={setLocal}
        />

        <Text style={styles.label}>Equipe responsável</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Equipe de Roçada 01"
          value={equipe}
          onChangeText={setEquipe}
        />

        <Text style={styles.label}>Tipo de intervenção</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Roçada mecanizada, roçada manual ou pulverização"
          value={tipoIntervencao}
          onChangeText={setTipoIntervencao}
        />

        <Text style={styles.label}>Status</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Pendente, Em andamento ou Concluída"
          value={status}
          onChangeText={setStatus}
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ex: Trecho próximo à curva com baixa visibilidade"
          value={observacao}
          onChangeText={setObservacao}
          multiline
        />

        <Text style={styles.label}>Risco</Text>

        <View style={styles.riscos}>
          <TouchableOpacity
            style={[styles.botaoRisco, risco === "baixo" && styles.baixoAtivo]}
            onPress={() => setRisco("baixo")}
          >
            <Text style={styles.textoRisco}>Baixo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoRisco, risco === "medio" && styles.medioAtivo]}
            onPress={() => setRisco("medio")}
          >
            <Text style={styles.textoRisco}>Médio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoRisco, risco === "alto" && styles.altoAtivo]}
            onPress={() => setRisco("alto")}
          >
            <Text style={styles.textoRisco}>Alto</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botaoSalvar} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar ocorrência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#eef7ef",
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 50,
  },
  card: {
    width: "100%",
    maxWidth: 760,
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#d4e4d4",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#064e2f",
    marginBottom: 24,
  },
  label: {
    fontWeight: "bold",
    color: "#064e2f",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#cbd5c0",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: "top",
  },
  riscos: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  botaoRisco: {
    flex: 1,
    backgroundColor: "#9ca3af",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  baixoAtivo: {
    backgroundColor: "#16a34a",
  },
  medioAtivo: {
    backgroundColor: "#d99a00",
  },
  altoAtivo: {
    backgroundColor: "#dc2626",
  },
  textoRisco: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  botaoSalvar: {
    backgroundColor: "#059669",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoVoltar: {
    marginTop: 14,
    padding: 14,
    alignItems: "center",
  },
  textoVoltar: {
    color: "#064e2f",
    fontWeight: "bold",
  },
});

