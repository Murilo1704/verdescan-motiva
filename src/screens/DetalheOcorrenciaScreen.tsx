import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onVoltar: () => void;
};

export function DetalheOcorrenciaScreen({ ocorrencia, onVoltar }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Detalhe da ocorrência</Text>

        <Text style={styles.local}>{ocorrencia.local}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.texto}>{ocorrencia.descricao}</Text>

        <Text style={styles.label}>Risco</Text>
        <Text style={[styles.risco, styles[ocorrencia.risco]]}>
          {ocorrencia.risco.toUpperCase()}
        </Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.texto}>{ocorrencia.data}</Text>

        <Text style={styles.label}>Equipe responsável</Text>
        <Text style={styles.texto}>{ocorrencia.equipe}</Text>

        <Text style={styles.label}>Tipo de intervenção</Text>
        <Text style={styles.texto}>{ocorrencia.tipoIntervencao}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.texto}>{ocorrencia.status}</Text>

        <Text style={styles.label}>Observação</Text>
        <Text style={styles.texto}>
          {ocorrencia.observacao || "Sem observações adicionais."}
        </Text>

        <Text style={styles.label}>Prioridade sugerida</Text>
        <Text style={styles.texto}>
          {ocorrencia.risco === "alto"
            ? "Enviar equipe com prioridade máxima."
            : ocorrencia.risco === "medio"
            ? "Agendar manutenção preventiva."
            : "Manter monitoramento do trecho."}
        </Text>

        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoBotao}>Voltar para lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef7ef",
    padding: 20,
    alignItems: "center",
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
    marginBottom: 20,
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
    color: "#ffffff",
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
    marginTop: 24,
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

