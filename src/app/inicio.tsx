import { StatusBar } from 'expo-status-bar';
import { Text, View ,Image} from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pagina Inicio</Text>
      <Image style={styles.img} source={require('../../assets/SENAI-SP.jpg')}/>
      <Link style={styles.btn} href={"/contatos"}>Contatos</Link>
      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>

      <StatusBar style="auto"/>
    </View>
  );
}

