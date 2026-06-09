import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onVoltar: () => void;
};

export function DetalheOcorrenciaScreen({ ocorrencia, onVoltar }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhe da ocorrência</Text>

      <View style={styles.card}>
        <Text style={styles.local}>{ocorrencia.local}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.texto}>{ocorrencia.descricao}</Text>

        <Text style={styles.label}>Risco</Text>
        <Text style={[styles.risco, styles[ocorrencia.risco]]}>
          {ocorrencia.risco.toUpperCase()}
        </Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.texto}>{ocorrencia.data}</Text>

        <Text style={styles.label}>Prioridade sugerida</Text>
        <Text style={styles.texto}>
          {ocorrencia.risco === "alto"
            ? "Enviar equipe de roçada com prioridade máxima."
            : ocorrencia.risco === "medio"
            ? "Agendar manutenção preventiva."
            : "Manter monitoramento do trecho."}
        </Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
        <Text style={styles.textoBotao}>Voltar para lista</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d4e4d4",
  },
  local: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#022c22",
    marginBottom: 18,
  },
  label: {
    fontWeight: "bold",
    color: "#064e2f",
    marginTop: 12,
    marginBottom: 4,
  },
  texto: {
    color: "#374151",
    fontSize: 16,
  },
  risco: {
    alignSelf: "flex-start",
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  baixo: {
    backgroundColor: "#16a34a",
  },
  medio: {
    backgroundColor: "#d99a00",
  },
  alto: {
    backgroundColor: "#dc2626",
  },
  botaoVoltar: {
    backgroundColor: "#059669",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});