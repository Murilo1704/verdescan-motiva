import { useState } from "react";
import {
  Alert,
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
  const [risco, setRisco] = useState<Risco>("baixo");

  function salvar() {
    if (descricao.trim() === "" || local.trim() === "") {
      Alert.alert("Atenção", "Preencha a descrição e o local da ocorrência.");
      return;
    }

    const dataAtual = new Date().toLocaleDateString("pt-BR");

    onSalvar({
      descricao,
      local,
      risco,
      data: dataAtual,
    });

    setDescricao("");
    setLocal("");
    setRisco("baixo");
  }

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef7ef",
  },
  titulo: {
    fontSize: 26,
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cbd5c0",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  riscos: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  botaoRisco: {
    flex: 1,
    backgroundColor: "#d1d5db",
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
    color: "#fff",
    fontWeight: "bold",
  },
  botaoSalvar: {
    backgroundColor: "#059669",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
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