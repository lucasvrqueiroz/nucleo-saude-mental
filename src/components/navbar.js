import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import News from '../../assets/icons/news.png';
import Home from '../../assets/icons/home.png';
import Messenger from '../../assets/icons/messenger.png';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <View style={styles.navBox}>

        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('News')}>
          <Image style={styles.navImage} source={News} resizeMode='contain' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.navImage} source={Home} resizeMode='contain' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('Messenger')}>
          <Image style={styles.navImage} source={Messenger} resizeMode='contain' />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFDE59',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10,
  },

  navBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },

  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navImage: {
    width: 30,
    height: 30,
  },
});
