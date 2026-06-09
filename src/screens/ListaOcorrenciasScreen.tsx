import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          <Text style={[styles.numero, styles.verde]}>{totalBaixo}</Text>
          <Text>BAIXO</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={[styles.numero, styles.amarelo]}>{totalMedio}</Text>
          <Text>MÉDIO</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={[styles.numero, styles.vermelho]}>{totalAlto}</Text>
          <Text>ALTO</Text>
        </View>
      </View>

      <View style={styles.areaTituloLista}>
        <Text style={styles.tituloLista}>Lista de ocorrências</Text>
        <Text style={styles.quantidade}>{ocorrencias.length} registros</Text>
      </View>

      <FlatList
        data={ocorrencias}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OcorrenciaCard
            ocorrencia={item}
            onPress={() => onSelecionarOcorrencia(item)}
          />
        )}
        contentContainerStyle={styles.lista}
      />

      <TouchableOpacity style={styles.botaoNovo} onPress={onNovaOcorrencia}>
        <Text style={styles.textoBotaoNovo}>Nova ocorrência</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef7ef",
  },
  header: {
    backgroundColor: "#064e2f",
    padding: 24,
    paddingTop: 36,
  },
  marca: {
    color: "#d1fae5",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitulo: {
    color: "#e5e7eb",
    marginTop: 12,
  },
  resumo: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginTop: -22,
  },
  resumoCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d7e6d7",
  },
  numero: {
    fontSize: 28,
    fontWeight: "bold",
  },
  verde: {
    color: "#16a34a",
  },
  amarelo: {
    color: "#d99a00",
  },
  vermelho: {
    color: "#dc2626",
  },
  areaTituloLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 28,
    marginBottom: 10,
  },
  tituloLista: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#022c22",
  },
  quantidade: {
    color: "#4b5563",
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  botaoNovo: {
    backgroundColor: "#059669",
    padding: 18,
    margin: 20,
    borderRadius: 14,
    alignItems: "center",
  },
  textoBotaoNovo: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

