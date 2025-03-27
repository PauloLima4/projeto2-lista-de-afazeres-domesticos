import {View, Text, StyleSheet} from 'react-native'

type Props = {
  turno: string,
  tarefa: string[]
}

export const Listas = (props: Props) => {
  return (
    <View>
       <Text style={styles.bold}>{props.turno}</Text>
       <Text>{props.tarefa}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
})