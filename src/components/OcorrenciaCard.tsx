import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onPress: (ocorrencia: Ocorrencia) => void;
};

export function OcorrenciaCard({ ocorrencia, onPress }: Props) {
  const corRisco = {
    baixo: "#159447",
    medio: "#d4a106",
    alto: "#d93636",
  };

  const textoRisco = {
    baixo: "Baixo",
    medio: "Médio",
    alto: "Alto",
  };

  return (
    <Pressable style={styles.card} onPress={() => onPress(ocorrencia)}>
      <View style={styles.topoCard}>
        <Text style={styles.local}>{ocorrencia.local}</Text>

        <View
          style={[
            styles.badge,
            { backgroundColor: corRisco[ocorrencia.risco] },
          ]}
        >
          <Text style={styles.badgeTexto}>{textoRisco[ocorrencia.risco]}</Text>
        </View>
      </View>

      <Text style={styles.descricao}>{ocorrencia.descricao}</Text>
      <Text style={styles.data}>Data: {ocorrencia.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#d5e5d6",
  },
  topoCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  local: {
    flex: 1,
    color: "#082f1d",
    fontSize: 17,
    fontWeight: "700",
    marginRight: 10,
  },
  descricao: {
    color: "#345043",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  data: {
    color: "#687d70",
    fontSize: 12,
    marginTop: 8,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeTexto: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
});