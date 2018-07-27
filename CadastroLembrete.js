import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CadastroLembrete extends CompositionEvent{
    render(){
        return (
            <View>
                <Text>Cadastrar Lembrete</Text>
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