import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onPress: () => void;
  onApagar: () => void;
};

export function OcorrenciaCard({ ocorrencia, onPress, onApagar }: Props) {
  function apagar(event: any) {
    event.stopPropagation?.();
    onApagar();
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.conteudo}>
        <Text style={styles.local}>{ocorrencia.local}</Text>
        <Text style={styles.descricao}>{ocorrencia.descricao}</Text>

        <View style={styles.linhaInfo}>
          <Text style={styles.info}>Data: {ocorrencia.data}</Text>
          <Text style={styles.info}>Status: {ocorrencia.status}</Text>
        </View>

        <Text style={styles.info}>Equipe: {ocorrencia.equipe}</Text>
        <Text style={styles.info}>Intervenção: {ocorrencia.tipoIntervencao}</Text>

        <TouchableOpacity style={styles.botaoApagar} onPress={apagar}>
          <Text style={styles.textoApagar}>Apagar ocorrência</Text>
        </TouchableOpacity>
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
  conteudo: {
    flex: 1,
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
  linhaInfo: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 8,
  },
  info: {
    marginTop: 6,
    color: "#4b5563",
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
  botaoApagar: {
    marginTop: 12,
    backgroundColor: "#fee2e2",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  textoApagar: {
    color: "#991b1b",
    fontWeight: "bold",
  },
});

