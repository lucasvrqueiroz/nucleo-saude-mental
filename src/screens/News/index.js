import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from "../../components/header";
import NavBar from "../../components/navbar";

const { width, height } = Dimensions.get('window');

export default function News() {
  return (
    <View style={styles.container}>

      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>Notícias</Text>
      
        <View style={styles.newsSection}>

          <View style={styles.newsItem}>
            <Image
              style={styles.newsImage}
              source={require("../../../assets/news/terapy.png")}
              resizeMode='cover'
            />
            <Text style={[styles.newsText, styles.newsTextLink]}>
              Rede de Atenção{"\n"}Psicossocial ultrapassa{"\n"}meta de expansão em 2024
            </Text>
          </View>

          <View style={styles.newsItem}>
            <Image
              style={styles.newsImage}
              source={require("../../../assets/news/ia.png")}
              resizeMode='cover'
            />
            <Text style={[styles.newsText, styles.newsTextLink]}>
              Saúde mental em{"\n"}tempos de{" "}
              <Text style={styles.linkText}>inteligência artificial</Text>
            </Text>
          </View>

          <View style={styles.newsItem}>
            <Image
              style={styles.newsImage}
              source={require("../../../assets/news/burnout.png")}
              resizeMode='cover'
            />
            <Text style={[styles.newsText, styles.newsTextLink]}>
              Brasil enfrenta{"\n"}recorde de afastamentos por{"\n"}transtornos mentais
            </Text>
          </View>

        </View>
      </ScrollView>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 80,
    color: "#4E3D27",
    fontSize: 32,
    fontWeight: "bold",
  },

  newsSection: {
    marginTop: 40,
    width: '90%',
    height: '80%',
    backgroundColor: "#4E3D27",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  newsItem: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFDE59',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },

  newsImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },

  newsText: {
    flex: 1,
    fontSize: 16,
    color: '#3D3D3D',
    fontWeight: 'bold',
  },

  newsTextLink: {
    textDecorationLine: 'underline',
  },

  linkText: {
    textDecorationLine: 'underline',
  },

});
