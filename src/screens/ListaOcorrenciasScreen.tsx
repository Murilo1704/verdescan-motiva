import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { Ocorrencia } from "../types/ocorrencia";
import { OcorrenciaCard } from "../components/OcorrenciaCard";

type Props = {
  ocorrencias: Ocorrencia[];
  onNovaOcorrencia: () => void;
  onSelecionarOcorrencia: (ocorrencia: Ocorrencia) => void;
};

export function ListaOcorrenciasScreen({
  ocorrencias,
  onNovaOcorrencia,
  onSelecionarOcorrencia,
}: Props) {
  const totalBaixo = ocorrencias.filter((item) => item.risco === "baixo").length;
  const totalMedio = ocorrencias.filter((item) => item.risco === "medio").length;
  const totalAlto = ocorrencias.filter((item) => item.risco === "alto").length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.marca}>VERDESCAN MOTIVA</Text>
        <Text style={styles.titulo}>Ocorrências de vegetação</Text>
        <Text style={styles.subtitulo}>
          Registros simulados para priorização de manutenção
        </Text>
      </View>

      <View style={styles.resumo}>
        <View style={styles.resumoCard}>
          <Text style={[styles.numeroResumo, { color: "#159447" }]}>
            {totalBaixo}
          </Text>
          <Text style={styles.textoResumo}>Baixo</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={[styles.numeroResumo, { color: "#d4a106" }]}>
            {totalMedio}
          </Text>
          <Text style={styles.textoResumo}>Médio</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={[styles.numeroResumo, { color: "#d93636" }]}>
            {totalAlto}
          </Text>
          <Text style={styles.textoResumo}>Alto</Text>
        </View>
      </View>

      <View style={styles.linhaTitulo}>
        <Text style={styles.secaoTitulo}>Lista de ocorrências</Text>
        <Text style={styles.total}>{ocorrencias.length} registros</Text>
      </View>

      <FlatList
        data={ocorrencias}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OcorrenciaCard
            ocorrencia={item}
            onPress={onSelecionarOcorrencia}
          />
        )}
        contentContainerStyle={styles.lista}
      />

      <Pressable style={styles.botao} onPress={onNovaOcorrencia}>
        <Text style={styles.botaoTexto}>Nova ocorrência</Text>
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
  marca: {
    color: "#b8f5c9",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 12,
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
  resumo: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: -18,
    gap: 10,
  },
  resumoCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d5e5d6",
  },
  numeroResumo: {
    fontSize: 26,
    fontWeight: "800",
  },
  textoResumo: {
    color: "#365243",
    fontSize: 12,
    marginTop: 4,
    textTransform: "uppercase",
  },
  linhaTitulo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  secaoTitulo: {
    color: "#082f1d",
    fontSize: 18,
    fontWeight: "800",
  },
  total: {
    color: "#587064",
    fontSize: 13,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 92,
  },
  botao: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 20,
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