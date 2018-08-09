import React, { Component } from 'react'
import { Text, View, Button, Alert } from 'react-native'

export default class App extends Component {
  // array de lembretes
  state = {
    lembretes: []
  }

  // método responsável por acessar a api e receber os dados em json
  componentDidMount(){
    fetch('https://devreminder.herokuapp.com/lembrete', {method: 'GET'})
      .then(T => T.json())
      .then(lembretes => this.setState({ lembretes }))
  }

  // método resposável por deletar o lembrete pelo id
  onDelete(id){
    Alert.alert(
      'Exclusão de Lembrete',
      'Você confirma a exclusão deste lembrete?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            fetch(`https://devreminder.herokuapp.com/lembrete/${id}`, { method: 'DELETE' })
              .then(T => T.json())
              .then(() => this.setState({ lembretes: this.state.lembretes.this.filter(T => T.id != id)}))
          }
        }
      ]
    )
  }

  render() {

    const { lembretes } = this.state

    return (
      <View>
        <Text>Seus Lembretes</Text>
        <Button title='Adicionar' onPress={()=> console.log('criou o lembrete')} />

        <View>
          { lembretes.map((lembrete, key) => (
            <View key={key}>
              <Text>{lembrete.conteudo}</Text>
              <Button title='Editar' onPress={()=> console.log('editar lemrete')} />
              <Button title='Excluir' onPress={()=> this.onDelete(lembrete.id)} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}

