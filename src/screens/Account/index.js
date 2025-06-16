import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import NavBar from "../../components/navbar";
import { inserirHumor, buscarHistoricoHumor, buscarUsuarioPorId } from '../../services/Database';

import UserPhoto from '../../../assets/userPhoto.png';
import VeryAngry from "../../../assets/emojis/veryAngry.png";
import Angry from "../../../assets/emojis/angry.png";
import Neutral from "../../../assets/emojis/neutral.png";
import Happy from "../../../assets/emojis/happy.png";
import VeryHappy from "../../../assets/emojis/veryHappy.png";

const { width } = Dimensions.get('window');

export default function Account() {
  const [humorHistorico, setHumorHistorico] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const userId = 1;
  
  useEffect(() => {
    buscarHistoricoHumor(userId, setHumorHistorico);

    buscarUsuarioPorId(userId, (usuario) => {
      if (usuario) {
        setNome(usuario.nome);
        setEmail(usuario.email);
      }
    });
  }, []);

  const handleHumorPress = (humor) => {
    inserirHumor(userId, humor, (success) => {
      if (success) {
        buscarHistoricoHumor(userId, setHumorHistorico);
      } else {
        Alert.alert("Erro", "Não foi possível registrar seu humor.");
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.userSection}>
          <Image style={styles.userPhoto} source={UserPhoto} resizeMode='cover' />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{nome}</Text>
            <Text style={styles.userAge}>{email}</Text>
          </View>
        </View>

        <View style={styles.humorBox}>
          <Text style={styles.humorText}>Como estou me sentindo hoje?</Text>
          <View style={styles.humorStatus}>
            <TouchableOpacity style={styles.humorButton} onPress={() => handleHumorPress("Muito irritado")}>
              <Image style={styles.emoji} source={VeryAngry} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton} onPress={() => handleHumorPress("Irritado")}>
              <Image style={styles.emoji} source={Angry} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton} onPress={() => handleHumorPress("Neutro")}>
              <Image style={styles.emoji} source={Neutral} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton} onPress={() => handleHumorPress("Feliz")}>
              <Image style={styles.emoji} source={Happy} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton} onPress={() => handleHumorPress("Muito feliz")}>
              <Image style={styles.emoji} source={VeryHappy} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.humorHistoryBox}>
          <Text style={styles.historyTitle}>Seu histórico</Text>
          {humorHistorico.length === 0 ? (
            <Text style={{ color: '#5c4012' }}>Nenhum registro ainda.</Text>
          ) : (
            humorHistorico.map((item) => (
              <View key={item.id} style={styles.historyItem}>
                <Text>{item.humor} - {new Date(item.date).toLocaleString('pt-BR')}</Text>
              </View>
            ))
          )}
        </View>

      </ScrollView>
      <NavBar />
    </View>
  );
}
