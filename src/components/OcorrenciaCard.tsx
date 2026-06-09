import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onPress: () => void;
};

export function OcorrenciaCard({ ocorrencia, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.local}>{ocorrencia.local}</Text>
        <Text style={styles.descricao}>{ocorrencia.descricao}</Text>
        <Text style={styles.data}>Data: {ocorrencia.data}</Text>
      </View>

      <Text style={[styles.risco, styles[ocorrencia.risco]]}>
        {ocorrencia.risco}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#d7e6d7",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  local: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#022c22",
  },
  descricao: {
    marginTop: 10,
    color: "#374151",
    fontSize: 15,
  },
  data: {
    marginTop: 8,
    color: "#6b7280",
    fontSize: 13,
  },
  risco: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
    textTransform: "capitalize",
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
});

