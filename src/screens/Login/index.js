import { Image, StyleSheet, Text, TextInput, View, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/logoNSM.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { buscarUsuario } from '../../services/Database';

const { width } = Dimensions.get('window');

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    buscarUsuario(email, senha, (usuario) => {
      if (usuario) {
        Alert.alert("Bem-vindo", `Olá ${usuario.nome}`);
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Usuário ou senha inválidos");
      }
    });
  };
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={Logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>NSM.org</Text>
      

      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleLogin}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não tem uma conta?
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>
            Criar Conta
          </Text>
      </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDE59",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },

  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },

  title: {
    marginBottom: 50,
    fontSize: 40,
    color: "#4E3D27",
    fontWeight: "bold",
  },
  
  label: {
    alignSelf: "flex-start",
    color: "#4E3D27",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    fontSize: 16,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 2,
  },
  button: {
    backgroundColor: "#4E3D27",
    width: "40%",
    height: 50,
    borderRadius: 40,
    paddingVertical: 8,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  registerText: {
    marginTop: 20,
    color: "#4E3D27",
    marginBottom: 10,
    MarginLeft: 10,
  },
  registerLink: {
    color: "#B68200",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
