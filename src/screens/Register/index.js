import { Image, StyleSheet, Text, TextInput, View, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/logoNSM.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const { width } = Dimensions.get('window');

export const Register = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = () => {
    Alert.alert("Conta criada", "Conta criada com sucesso!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        
        <Image style={styles.logo} source={Logo} resizeMode="contain" />
        
        <Text style={styles.title}>NSM.org</Text>
        <Text style={styles.subtitle}>Crie seu login</Text>

        <View style={styles.inputBox}>

          <Text style={styles.label}>Nome :</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Idade :</Text>
          <TextInput
            value={idade}
            onChangeText={setIdade}
            style={styles.input}
            placeholder="Digite sua idade"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          <Text style={styles.label}>E-mail :</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Senha :</Text>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
          />

        </View>

        <View style={styles.footer}>
          <Text style={styles.loginText}>
            Já tem um login?{" "}
            <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
              entrar.
            </Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDE59",
  },
  innerContainer: {
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4E3D27",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#4E3D27",
    marginBottom: 30,
  },
  inputBox: {
    width: "100%",
    marginBottom: 30,
  },
  label: {
    color: "#4E3D27",
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 30,
    height: 40,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  footer: {
    alignItems: "center",
    width: "100%",
  },
  loginText: {
    color: "#4E3D27",
    marginBottom: 10,
  },
  loginLink: {
    color: "#B68200",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4E3D27",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
