import { Image, StyleSheet, Text, TextInput, View, Dimensions, ScrollView } from "react-native";
import Logo from "../../../assets/logoNSM.png";
import UserPhoto from "../../../assets/userPhoto.png";

const { width } = Dimensions.get("window");

export const Account = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.headerTitle}>NSM.org</Text>
        <View style={styles.headerIcons}>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={UserPhoto} style={styles.userPhoto} />
        <Text style={styles.userName}>Lucas Queiroz</Text>
        <Text style={styles.userAge}>20 anos</Text>

        <View style={styles.humorStatus}>
          <Text style={styles.humorStatusText}>Como estou me sentindo hoje?</Text>
          <View style={styles.moodIcons}>
            <Text>😡 😠 😐 🙂 😁</Text>
            <View style={styles.moodBar} />
          </View>
        </View>

        <Text style={styles.labelHumor}>descrição do humor:</Text>
        <TextInput
          style={styles.humorInput}
          defaultValue="teste"
        />
      </View>

      <Text style={styles.historyTitle}>Seu histórico</Text>

      <View style={styles.historyCard}>
        <View style={styles.moodDots}>
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={styles.moodRow}>
              {["red", "green", "orange", "red"].map((color, j) => (
                <View key={j} style={[styles.dot, { backgroundColor: color }]} />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.historyTextBox}>
          {[
            "Teste",
            "Teste",
            "Teste",
            "Teste",
          ].map((text, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.historyText}>{text}</Text>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: index % 2 === 0 ? "green" : "red" },
                ]}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDE59",
  },
  header: {
    alignItems: "flex-start",
    backgroundColor: "#FFDE59",
    paddingTop: 40,
    marginLeft: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 60,
    height: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4E3D27",
    marginTop: 5,
  },
  headerIcons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "80%",
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: "#4E3D27",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 10,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  userAge: {
    color: "white",
    marginBottom: 20,
  },
  humorStatus: {
    backgroundColor: "#FFDE59",
    padding: 15,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  humorStatusText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4E3D27",
    marginBottom: 10,
  },
  moodIcons: {
    alignItems: "center",
  },
  moodBar: {
    height: 5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 100,
    marginTop: 5,
  },
  labelHumor: {
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  humorInput: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    width: "100%",
    color: "#333",
  },
  historyTitle: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#4E3D27",
  },
  historyCard: {
    backgroundColor: "#4E3D27",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moodDots: {
    flexDirection: "column",
    gap: 5,
  },
  moodRow: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  historyTextBox: {
    flex: 1,
    marginLeft: 10,
    gap: 10,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  historyText: {
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
