import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ocorrencia } from "../types/ocorrencia";
import OcorrenciaCard from "../components/OcorrenciaCard";

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>VerdeScan Motiva</Text>
        <Text style={styles.subtitulo}>Ocorrências de vegetação</Text>
      </View>

      <TouchableOpacity style={styles.botaoNovo} onPress={onNovaOcorrencia}>
        <Text style={styles.textoBotaoNovo}>Cadastrar ocorrência</Text>
      </TouchableOpacity>

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
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma ocorrência cadastrada.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#064e2f",
    padding: 20,
    paddingTop: 32,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#d1fae5",
    marginTop: 4,
  },
  botaoNovo: {
    backgroundColor: "#16a34a",
    margin: 16,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBotaoNovo: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  listaVazia: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 32,
  },
});