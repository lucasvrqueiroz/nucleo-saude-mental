import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Logo from "../../../assets/logoNSM.png";
import News1 from "../../../assets/news1.png";
import News2 from "../../../assets/news2.png";
import Girasol from "../../../assets/girasol.png";

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.logo} source={Logo} resizeMode="contain" />
            <Text style={styles.title}>NSM.org</Text>
          </View>
        </View>

        <View style={styles.newsSection}>
          <View style={styles.newsItem}>
            <Image style={styles.newsImage} source={News1} resizeMode="cover" />
            <Text style={styles.newsText}>
              Rede de Atenção Psicossocial ultrapassa meta de expansão em 2024
            </Text>
          </View>

          <View style={styles.newsItem}>
            <Image style={styles.newsImage} source={News2} resizeMode="cover" />
            <Text style={styles.newsText}>
              Brasil enfrenta recorde de afastamentos por transtornos mentais
            </Text>
          </View>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.contentBox}>
            <Text style={styles.contentText}>
              • Artigos sobre ansiedade, depressão, estresse, autoestima e muito mais {"\n"}
              • Ferramentas para autocuidado e práticas de relaxamento {"\n"}
              • Testes informativos e guias sobre quando procurar ajuda profissional {"\n"}
              • Conteúdos elaborados por especialistas em psicologia e saúde mental
            </Text>
            <Image style={styles.girasol} source={Girasol} resizeMode="contain" />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            <Text style={{ fontWeight: "bold" }}>Você Sabia?</Text> {"\n"}
            O que você come afeta diretamente seu humor. {"\n"}
            Dietas ricas em vegetais, frutas, grãos integrais e ômega-3 (como peixes) estão associadas a menores taxas de depressão. Já dietas com excesso de alimentos ultraprocessados e açúcares podem aumentar o risco de problemas mentais.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },

  header: {
    flex: 0.2,
    width: '100%',
    backgroundColor: '#FFDE59',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5C4012',
  },

  newsSection: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 15,
    marginVertical: 30,
  },

  newsItem: {
    backgroundColor: "#4E3D27",
    width: width * 0.42,
    marginHorizontal: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  newsImage: {
    width: '100%',
    height: 100,
  },

  newsText: {
    backgroundColor: "#4E3D27",
    fontSize: 12,
    padding: 6,
    color: 'white',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  contentSection: {
    flex: 0.3,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },

  contentBox: {
    width: '90%',
    height: '100%',
    backgroundColor: '#4E3D27',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'column',
    position: 'relative',
  },

  contentText: {
    fontSize: 15,
    color: 'white',
    lineHeight: 18,
  },

  girasol: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    opacity: 0.4,
  },

  footer: {
    flex: 0.2,
    width: '100%',
    padding: 15,
    backgroundColor: '#FFDE59',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  footerText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
});
