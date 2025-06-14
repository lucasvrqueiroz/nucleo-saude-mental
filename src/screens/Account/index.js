import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import NavBar from "../../components/navbar"
import UserPhoto from '../../../assets/userPhoto.png';
import VeryAngry from "../../../assets/emojis/veryAngry.png"
import Angry from "../../../assets/emojis/angry.png"
import Neutral from "../../../assets/emojis/neutral.png"
import Happy from "../../../assets/emojis/happy.png"
import VeryHappy from "../../../assets/emojis/veryHappy.png"

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.userSection}>
          <Image
            style={styles.userPhoto}
            source={UserPhoto}
            resizeMode='cover'
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Lucas Queiroz</Text>
            <Text style={styles.userAge}>20 Anos</Text>
            <Text style={styles.userAge}>(19) 98304-4377</Text>
            <Text style={styles.userAge}>lucas.vrq07@gmail.com</Text>
          </View>

        </View>

        <View style={styles.humorBox}>
          <Text style={styles.humorText}>Como estou me sentindo hoje?</Text>

          <View style={styles.humorStatus}>
            <TouchableOpacity style={styles.humorButton}>
              <Image style={styles.emoji}
              source={VeryAngry} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton}>
              <Image style={styles.emoji}
              source={Angry} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton}>
              <Image style={styles.emoji}
              source={Neutral} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton}>
              <Image style={styles.emoji}
              source={Happy} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.humorButton}>
              <Image style={styles.emoji}
              source={VeryHappy} />
            </TouchableOpacity>
          </View>

        </View>


        <View style={styles.humorHistoryBox}>
          <Text style={styles.historyTitle}>Seu histórico</Text>

          {/*backend */}
          <View style={styles.historyItem}><Text>Teste</Text></View>
          <View style={styles.historyItem}><Text>Teste</Text></View>
          <View style={styles.historyItem}><Text>Teste</Text></View>
          <View style={styles.historyItem}><Text>Teste</Text></View>

        </View>

      </ScrollView>

      < NavBar />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDE59',
  },

  scrollContent: {

    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4E3427',
    marginVertical: 120,
    borderRadius: 40,
  },


  userSection: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 40,
    marginLeft: 50,
  },

  userPhoto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  userInfo: {
    marginLeft: 15,
  },

  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  userAge: {
    fontSize: 14,
    color: 'white',
  },

  humorBox: {
    width: '90%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFDE59',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  humorText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#5c4012',
  },

  humorStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  humorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  emoji: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },

  humorDescriptionBox: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  humorDescription: {
    fontSize: 14,
    color: '#5c4012',
    textAlign: 'center',
  },

  humorHistoryBox: {
    width: '90%',
    backgroundColor: '#ffde59',
    borderRadius: 20,
    padding: 15,
  },

  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5c4012',
    marginBottom: 10,
  },

  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    marginBottom: 8,
  },
});
