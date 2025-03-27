import {View, Text, StyleSheet} from 'react-native'
import { Listas } from './components/Listas'

export default function App () {
  return (
    <View>
       <Text style={styles.bold}>Lista de Afazeres Domésticos</Text>
       <Listas turno='Manhã' tarefa={[
         '1.lavar as roupas sujas\n',
         '2.lavar e guarda a louça\n',
         '3.limpar a pia da cozinha\n',
         '4.preparar o almoço\n',
         '5.colocar as roupa no varal\n\n'
       ]}/>
       <Listas turno='Tarde' tarefa={[
         '1.limpar a mesa da cozinha\n',
         '2.varrer e passar o pano nos cômodos da casa\n',
         '3.lavar e guarda a louça\n',
         '4.limpar apia da cozinha\n',
         '5.tirar as roupas do varal\n\n'
       ]}/>
       <Listas turno='Noite' tarefa={[
         '1.levar o cachorro para passear\n',
         '2.limpar os calçados durante o dia\n',
         '3.preparar o jantar\n'
       ]}/>
    </View>
  )
}
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
    },
  
})