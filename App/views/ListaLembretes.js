import React, { Component } from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native'

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
              .then(() => this.setState({ lembretes: this.state.lembretes.filter(T => T.id !== id)}))
          }
        }
      ]
    )
  }

  render() {

    const { lembretes } = this.state

    return (
      <View style={ styles.container }>
        <View style={ styles.subcontainer }>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Seus Lembretes</Text>
          <Button style={{ height: 50 }} title='Adicionar' onPress={()=> this.props.history.push('/cadastro')} />
        </View>

        <View style={{ flex: 0.9 }}>
          { lembretes.map((lembrete, key) => (
            <View key={key} style={styles.containerLembretes} >
              <Text style={{ flex: 0.8 }}>{lembrete.conteudo}</Text>
              <Button style={{ flex: 0.1 }} title='Editar' onPress={()=> this.props.history.push('/' + lembrete.id)} />
              <Button style={{ flex: 0.1 }} title='Excluir' onPress={()=> this.onDelete(lembrete.id)} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  subcontainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerLembretes: {
    flex: 0.1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})