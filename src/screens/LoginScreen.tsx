import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: Props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    if (usuario.trim() === "admin" && senha.trim() === "1234") {
      setUsuario("");
      setSenha("");
      onLogin();
      return;
    }

    Alert.alert(
      "Login inválido",
      "Usuário ou senha incorretos.\n\nUsuário: admin\nSenha: 1234"
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.marca}>VERDESCAN MOTIVA</Text>
        <Text style={styles.titulo}>Acesso ao sistema</Text>
        <Text style={styles.subtitulo}>
          Entre para gerenciar ocorrências de vegetação nas rodovias.
        </Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o usuário"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.credenciais}>Usuário: admin | Senha: 1234</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef7ef",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: "#ffffff",
    padding: 28,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#d4e4d4",
  },
  marca: {
    color: "#065f46",
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#064e2f",
    textAlign: "center",
  },
  subtitulo: {
    color: "#4b5563",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  label: {
    color: "#064e2f",
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#cbd5c0",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: "#059669",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 4,
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  credenciais: {
    marginTop: 18,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 13,
  },
});