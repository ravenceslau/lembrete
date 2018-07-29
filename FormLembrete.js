import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, TextInput, Picker } from 'react-native'

export default class FormLembrete extends Component {
    state = {
        conteudo: '',
        prioridade: 'MEDIA',
        arquivado: false
    }

    render (){
        return (
            <View style={styles.container}>

                <View>
                    <View>
                        <Text>Conteúdo:</Text>
                        <TextInput 
                            placeholder='Digite o conteudo da mensagem'
                            value={this.state.conteudo}
                            onChangeText={conteudo => this.setState({ conteudo })}  
                        />
                    </View>
                    <View>
                        <Text>Prioridade:</Text>
                        <Picker 
                            selectedValue={this.state.prioridade}
                            onValueChange={ prioridade => this.setState({ prioridade })}>
                            <Picker.Item label='BAIXA' value='BAIXA' />
                            <Picker.Item label='MEDIA' value='Media' />
                            <Picker.Item label='ALTA' value='ALTA' />
                        </Picker>
                    </View>
                    <View>
                        <Text>Arquivar</Text>
                        <Picker
                            selectedValue={this.state.arquivado}
                            onValueChange={ arquivado => this.setState({ arquivado }) } >
                            <Picker.Item label='SIM' value />
                            <Picker.Item label='NÃO' value={false} />
                        </Picker>
                    </View>
                </View>

                <View>
                    <Button title='Salvar' disabled={this.state.conteudo === ''} onPress={()=> this.props.onSave(this.state)} />
                    <Button title='Cancelar' onPress={this.props.onCancel} />
                </View>

            </View>
        )
    }    
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})