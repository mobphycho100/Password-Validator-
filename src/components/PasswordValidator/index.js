// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  MainContainer,
  Heading,
  Description,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, handlePassword] = useState('')

  const onChangePassword = event => {
    handlePassword(event.target.value)
  }

  return (
    <BgContainer>
      <MainContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </MainContainer>
    </BgContainer>
  )
}

export default PasswordValidator
