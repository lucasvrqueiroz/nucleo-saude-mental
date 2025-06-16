import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Logo from "../../assets/logoNSM.png";
import UserIcon from "../../assets/icons/user.png";
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.headerBox}>

                <View style={styles.logoBox}>
                    <Image
                        style={styles.logo}
                        source={Logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.title}>NSM.org</Text>
                </View>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.navigate("Account")}
                >
                    <Image
                        style={styles.icon}
                        source={UserIcon}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '15%',
        backgroundColor: '#FFDE59',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    logoBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    logo: {
        width: 60,
        height: 60,
        marginBottom: -4,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B2E1E',
        marginTop: 4,
    },

    iconButton: {
        padding: 6,
    },

    icon: {
        width: 40,
        height: 40,
    },
});
