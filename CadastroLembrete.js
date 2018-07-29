import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FormLembrete from './FormLembrete'

export default class CadastroLembrete extends Component{
    render(){
        return (
            <View style={ styles.container }>
                <Text>Cadastrar Lembrete</Text>
                <FormLembrete />
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