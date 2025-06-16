import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Header from "../../components/header";
import NavBar from "../../components/navbar";
import News1 from "../../../assets/news/news1.png"
import News2 from "../../../assets/news/news2.png"

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>

      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.newsSection}>
          <View style={styles.newsItem}>
            <Image style={styles.newsImage} source={News1} resizeMode="cover" />
            <View style={styles.newsOverlay}>
              <Text style={styles.newsMore}>Ler mais →</Text>
              <Text style={styles.newsText}>
                Rede de Atenção Psicossocial ultrapassa meta de expansão em 2024
              </Text>
            </View>
          </View>

          <View style={styles.newsItem}>
            <Image style={styles.newsImage} source={News2} resizeMode="cover" />
            <View style={styles.newsOverlay}>
              <Text style={styles.newsMore}>Ler mais →</Text>
              <Text style={styles.newsText}>
                Brasil enfrenta recorde de afastamentos por transtornos mentais
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Cuidar da mente é tão importante quanto cuidar do corpo. Nosso aplicativo foi criado para ajudar você a entender melhor a sua saúde mental, oferecendo informações confiáveis, dicas práticas e conteúdos educativos para o seu bem-estar emocional.
          </Text>
          <Text style={styles.infoText}>Aqui, você encontra:</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Você Sabia?</Text>
          <Text style={styles.footerText}>
            O que você come afeta diretamente seu humor. {"\n"}
            Dietas ricas em vegetais, frutas, grãos integrais e ômega-3 (como peixes) estão associadas a menores taxas de depressão. Já dietas com excesso de alimentos ultraprocessados e açúcares podem aumentar o risco de problemas mentais.
          </Text>
        </View>

      </ScrollView>
      
      <NavBar />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDE59',
  },

  scrollContent: {
    paddingBottom: height * 0.12,
  },

  newsSection: {
    height: height * 0.35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  newsItem: {
    width: width * 0.42,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#4E3D27',
  },

  newsImage: {
    width: '100%',
    height: '55%',
  },
  newsOverlay: {
    padding: 6,
  },
  newsMore: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  newsText: {
    color: 'white',
    fontSize: 11,
  },

  infoSection: {
    backgroundColor: '#4E3D27',
    borderRadius: 20,
    marginHorizontal: 15,
    padding: 15,
    justifyContent: 'center',
    marginTop: 10,
  },
  infoText: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },

  footer: {
    backgroundColor: '#FFDE59',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    marginTop: 10,
  },

  footerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5C4012',
  },

  footerText: {
    fontSize: 13,
    color: '#5C4012',
    lineHeight: 18,
    marginTop: 5,
  },

  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.1,
  },
});
