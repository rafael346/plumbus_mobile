import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 10px;
  width: 250px;
  max-height: 244px;
  border-radius: 8px;
  background: #fff;
`


export const Image = styled.Image`
  width: 100%;
  height: 168px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const Content = styled.View`
  display: flex;
  max-height: 76px;
  flex-direction: column;
  align-items: center;

`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
`

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
`