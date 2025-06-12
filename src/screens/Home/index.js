import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/logoNSM.png";
import News1 from "../../../assets/news1.png";
import News2 from "../../../assets/news2.png";
import Sunflower from "../../../assets/sunflower.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title}>NSM.org</Text>
                </View>
            </View>

            <View style={styles.newsSection}>
                <View style={styles.newsItem}>
                    <Image source={News1} style={styles.newsImage} />
                    <Text style={styles.readMore}>Ler mais →</Text>
                    <Text style={styles.newsText}>
                        Rede de Atenção Psicossocial ultrapassa meta de expansão em 2024
                    </Text>
                </View>
                <View style={styles.newsItem}>
                    <Image source={News2} style={styles.newsImage} />
                    <Text style={styles.readMore}>Ler mais →</Text>
                    <Text style={styles.newsText}>
                        Brasil enfrenta recorde de afastamentos por transtornos mentais
                    </Text>
                </View>
            </View>

            <View style={styles.introBox}>
                <Text style={styles.introText}>
                    Cuidar da mente é tão importante quanto cuidar do corpo. Nosso aplicativo foi criado para ajudar você a entender melhor a sua saúde mental, oferecendo informações confiáveis, dicas práticas e conteúdos educativos para o seu bem-estar emocional.
                    {"\n\n"}Aqui, você encontra:
                </Text>
                <Image source={Sunflower} style={styles.sunflower} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.question}>Você Sabia?</Text>
                <Text style={styles.footerText}>
                    O que você come afeta diretamente seu humor.{"\n\n"}
                    Dietas ricas em vegetais, frutas, grãos integrais e ômega-3 (como peixes) estão associadas a menores taxas de depressão. Já dietas com excesso de alimentos ultraprocessados e açúcares podem aumentar o risco de problemas mentais.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        backgroundColor: "#FFDE59",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#4E3D27",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },

    newsSection: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    newsItem: {
        width: "45%",
        backgroundColor: "#4E3D27",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
    },
    newsImage: {
        width: "100%",
        height: 100,
    },
    readMore: {
        position: "absolute",
        top: 6,
        left: 6,
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    newsText: {
        color: "white",
        fontSize: 13,
        padding: 8,
    },

    introBox: {
        backgroundColor: "#4E3D27",
        margin: 20,
        padding: 16,
        borderRadius: 20,
        position: "relative",
    },
    introText: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
    },
    sunflower: {
        position: "absolute",
        right: 10,
        bottom: 10,
        width: 50,
        height: 50,
    },

    footer: {
        backgroundColor: "#FFDE59",
        padding: 20,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4E3D27",
        marginBottom: 10,
    },
    footerText: {
        fontSize: 13,
        lineHeight: 18,
        color: "#4E3D27",
    },
});
