import React from 'react'
import { Text, View, Button } from 'react-native'

export default class App extends React.Component {
  // array de lembretes
  state = {
    lembretes: []
  }

  // metodo responsável por acessar a api e receber os dados em json
  componentDidMount(){
    fetch('https://devreminder.herokuapp.com/lembrete', {method: 'GET'})
      .then(T => T.json())
      .then(lembretes => this.setState({ lembretes }))
  }

  render() {

    const { lembretes } = this.state

    return (
      <View>
        <Text>Lembrete</Text>
        <Button title='Adicionar' onPress={()=> console.log('criou o lembrete')} />

        <View>
          { lembretes.map((lembrete, key) => (
            <View key={key}>
              <Text>{lembrete.conteudo}</Text>
              <Button title='Editar' onPress={()=> console.log('editar lemrete')} />
              <Button title='Excluir' onPress={()=> console.log('excluir lemrete')} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

