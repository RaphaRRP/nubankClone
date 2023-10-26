import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
 
const list = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '300,50',
    date: '17/09/2023',
    type:0,
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '2500,00',
    date: '26/09/2023',
    type:1,
  },
  {
    id: 3,
    label: 'salario',
    value: '7.200,00',
    date: '12/10/2023',
    type:1,
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Pedro Roberto"/>

      <Balance saldo="9.100,50" gastos="-527,00"/>

      <Text style={styles.title}> Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><Text><Moviments data={item}/></Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
    
  }
});
