import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormLembrete from './FormLembrete'
import qs from 'querystring'

export default class CadastroLembrete extends Component{

    onSave(data){
        fetch('https://devreminder.herokuapp.com/lembrete', {
            method: 'POST',
            body: qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(T => T.json())
            .then(() => Alert.alert('Cadastrado', 'Lembrete cadastrado'))
    }

    render(){
        return (
            <View style={ styles.container }>
                <Text>Cadastrar Lembrete</Text>
                <FormLembrete onSave={this.onSave.bind(this)} onCancel={console.log} />
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