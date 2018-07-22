import React from 'react'
import { Text, View, Button } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Lembrete</Text>
        <Button title='Adicionar' onPress={()=> console.log('criou o lembrete')} />
        <View>

          <View>
            <Text>Lemrete 1</Text>
            <Button title='Editar' onPress={()=> console.log('editar lemrete')} />
            <Button title='Excluir' onPress={()=> console.log('excluir lemrete')} />
          </View>

          <View>
            <Text>Lemrete 2</Text>
            <Button title='Editar' onPress={()=> console.log('editar lemrete')} />
            <Button title='Excluir' onPress={()=> console.log('excluir lemrete')} />
          </View>

        </View>
      </View>
    );
  }
}

