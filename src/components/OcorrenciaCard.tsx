import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onPress: () => void;
};

export default function OcorrenciaCard({ ocorrencia, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.descricao}>{ocorrencia.descricao}</Text>
        <Text style={[styles.risco, styles[ocorrencia.risco]]}>
          {ocorrencia.risco.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.local}>{ocorrencia.local}</Text>
      <Text style={styles.data}>{ocorrencia.data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  descricao: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
  },
  risco: {
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  baixo: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },
  medio: {
    backgroundColor: "#fef9c3",
    color: "#854d0e",
  },
  alto: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
  },
  local: {
    marginTop: 8,
    color: "#374151",
  },
  data: {
    marginTop: 4,
    color: "#6b7280",
    fontSize: 12,
  },
});