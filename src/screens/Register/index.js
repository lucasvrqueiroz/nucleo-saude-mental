import { Image, StyleSheet, Text, TextInput, View, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/logoNSM.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { inserirUsuario } from '../../services/Database';

const { width } = Dimensions.get('window');

export default function Register() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    inserirUsuario(nome, email, senha, (sucesso) => {
      if (sucesso) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', 'Email já cadastrado ou falha no cadastro.');
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
    
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>
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

      <TouchableOpacity style={styles.button} onPress={handleCadastro}> 
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

        <Text style={styles.registerText}>
          Já possui uma conta?
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerLink}>Entrar</Text>
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
    width: width * 0.4,
    height: width * 0.4,
  },

  title: {
    marginBottom: 20,
    fontSize: 38,
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
    fontSize: 20,
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
