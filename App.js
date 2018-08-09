import React, { Component } from 'react'
import ListaLembretes from './ListaLembretes'
import CadastroLembrete from './CadastroLembrete'
import EditarLembrete from './EditarLembrete'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route path='/cadastro' component={CadastroLembrete} />
            <Route path='/:pageId' component={EditarLembrete} />
            <Route component={ListaLembretes} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
} 