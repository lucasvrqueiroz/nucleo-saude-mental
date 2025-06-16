import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/header';
import NavBar from '../../components/navbar';
import Phone from '../../../assets/icons/phone.png';
import Sms from '../../../assets/icons/sms.png';

const { width } = Dimensions.get('window');

export default function Messenger() {
  return (
    <>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.messengerSection}>

          <Text style={styles.title}>Precisa de ajuda?</Text>
          <Text style={styles.subtitle}>
            entre em contato com a nossa{'\n'}linha de saúde mental.
          </Text>

          <View style={styles.iconsBox}>
            <Image source={Phone} style={styles.icon} resizeMode="contain" />
            <Image source={Sms} style={styles.icon} resizeMode="contain" />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LIGAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>MENSAGEM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },

  messengerSection: {
    marginTop: 150,
    width: '90%',
    backgroundColor: '#5C3403',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },

  iconsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 30,
  },

  icon: {
    width: 50,
    height: 50,
    tintColor: 'white',
  },

  button: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 15,
  },

  buttonText: {
    textAlign: 'center',
    color: '#5C3403',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
