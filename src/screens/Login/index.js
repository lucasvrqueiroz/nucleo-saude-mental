import { Image, StyleSheet, Text, TextInput, View, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/logoNSM.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const { width } = Dimensions.get('window');

export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", "Login simulado com sucesso!");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={styles.innerContainer}>

        <Text style={styles.title}>NSM.org</Text>
        
        <Image
          style={styles.logo}
          source={Logo}
          resizeMode="contain"
        />

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta?
          <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
            Criar Conta
          </Text>
        </Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDE59",
    alignItems: "center",
  },
  innerContainer: {
    width: width * 0.75,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 150,
  },
  title: {
    fontSize: 42,
    color: "#4E3D27",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Times New Roman, serif",
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 40,
  },
  label: {
    alignSelf: "flex-start",
    color: "#4E3D27",
    fontFamily: "Arial, serif",
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
  },
  registerLink: {
    color: "#B68200",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
