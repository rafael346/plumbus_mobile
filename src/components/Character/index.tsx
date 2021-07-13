import React from "react";
import { Container, Content, Image, SubTitle, Title } from "./styles";


type CharacterProps = {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  type: string;
  status: string;
  favorited: boolean;
}
/* 
Props
{ id,
    name,
    image,
    species,
    gender,
    type,
    favorited = false,
    status }: CharacterProps
*/

export function Character() {
  const imageUrl = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
  return (

    <Container>
      <Image source={{ uri: imageUrl }} />
      <Content>
        <Title>Morty</Title>
        <SubTitle>Human</SubTitle>
      </Content>
    </Container>
  )
}