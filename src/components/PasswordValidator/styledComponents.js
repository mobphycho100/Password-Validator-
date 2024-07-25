// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Roboto;
  padding: 20px;
`

export const MainContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 35px;
  border-radius: 10px;
  margin: 0;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.5);
`

export const Heading = styled.h1`
  color: white;
  font-size: 42px;
  font-family: Roboto;
  text-align: center;
  margin: 0;
  font-weight: 500;
`

export const Description = styled.p`
  color: #f8fafc;
  font-size: 15px;
  text-align: center;
  margin: 18px 0 50px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #edeeff;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 12px;
  margin: 10px;
  text-align: center;
`
