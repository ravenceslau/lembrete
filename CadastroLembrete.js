import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CadastroLembrete extends Component{
    render(){
        return (
            <View style={ styles.container }>
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