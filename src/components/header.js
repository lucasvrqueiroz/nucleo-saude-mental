import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from "../../assets/logoNSM.png";
import UserIcon from "../../assets/icons/user.png";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.logoBox}>
                <Image
                    style={styles.logo}
                    source={Logo}
                    resizeMode='contain'
                />
                <Text style={styles.title}>NSM.org</Text>
            </View>

            <View style={styles.iconsBox}>
                <Image
                    style={styles.icon}
                    source={UserIcon}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItens: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#FFDE59",
    },
    logoBox: {
        flex: 0.5,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "collun",
        marginTop: 80,
        marginLeft: 10,
    },
    logo: {
        width: '60%',
        height: '60%',
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5C4012',   
        marginTop: -5,
        marginLeft: 22,
    },
    iconsBox: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 80,
    },
    icon: {
        marginTop: 20,
        marginLeft: 80,
        width: '40%',
        height: '40%',
    }
});
