import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormLembrete from './FormLembrete'
import qs from 'querystring'

export default class EditarLembrete extends Component{

    state = {
        lembrete: undefined
    }

    onSave (data){
        fetch('https://devreminder.herokuapp.com/lembrete/2', {
            method: 'PUT',
            body: qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(T => T.json())
            .then(() => Alert.alert('Editar', 'Lembrete editado'))
    }

    // método responsável por acessar a api e receber os dados em json
    componentDidMount(){
        fetch('https://devreminder.herokuapp.com/lembrete/2', { method: 'GET' })
        .then(T => T.json())
        .then(lembrete => this.setState({ lembrete }))
    }

    render(){

        const { lembrete } = this.state

        return (
            <View style={ styles.container }>
                <Text>Editar Lembrete</Text>

                {!lembrete && (
                    <Text> Não há dados </Text>
                )}

                {lembrete && ( 
                    <FormLembrete value={lembrete} onSave={this.onSave.bind(this)} onCancel={console.log} />
                )}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})