import React from "react";
import { View, Text, StatusBar, Image, SafeAreaView, TextInput } from "react-native";

import { Container, Input } from './styles'
import Logo from '../../assets/logo1.png'
import { Character } from "../../components/Character";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
      <Image source={Logo} />
      <Input placeholder='Pesquisar Personagem' />
      <Character />
    </Container>
  )
}