import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ocorrencia } from "../types/ocorrencia";

type Props = {
  ocorrencia: Ocorrencia;
  onVoltar: () => void;
};

export function DetalheOcorrenciaScreen({ ocorrencia, onVoltar }: Props) {
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

  const recomendacao = {
    baixo: "Manter monitoramento periódico.",
    medio: "Acompanhar evolução do trecho nos próximos dias.",
    alto: "Priorizar vistoria ou poda no planejamento da equipe.",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onVoltar}>
          <Text style={styles.voltar}>Voltar</Text>
        </Pressable>

        <Text style={styles.titulo}>Detalhe da ocorrência</Text>
        <Text style={styles.subtitulo}>Informações do registro selecionado</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Local</Text>
        <Text style={styles.valor}>{ocorrencia.local}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.valor}>{ocorrencia.descricao}</Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.valor}>{ocorrencia.data}</Text>

        <Text style={styles.label}>Risco</Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: corRisco[ocorrencia.risco] },
          ]}
        >
          <Text style={styles.badgeTexto}>{textoRisco[ocorrencia.risco]}</Text>
        </View>

        <Text style={styles.label}>Recomendação</Text>
        <Text style={styles.recomendacao}>
          {recomendacao[ocorrencia.risco]}
        </Text>
      </View>

      <Pressable style={styles.botao} onPress={onVoltar}>
        <Text style={styles.botaoTexto}>Voltar para lista</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  card: {
    backgroundColor: "#ffffff",
    margin: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#d5e5d6",
  },
  label: {
    color: "#587064",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    marginTop: 12,
  },
  valor: {
    color: "#082f1d",
    fontSize: 16,
    marginTop: 6,
    lineHeight: 22,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginTop: 8,
  },
  badgeTexto: {
    color: "#ffffff",
    fontWeight: "800",
  },
  recomendacao: {
    color: "#0f2f20",
    backgroundColor: "#eef7ef",
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    lineHeight: 20,
  },
  botao: {
    marginHorizontal: 16,
    backgroundColor: "#058f35",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
});