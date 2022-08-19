import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responseive'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://img.wallpapersafari.com/desktop/1440/900/40/75/IwHGyh.jpg')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  margin-right: 350px;
  background-color: whitesmoke;
  ${mobile({ width: '75%', marginRight: '0px' })}
`

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 20px;
`

const Button = styled.button`
  font-size: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ce46e2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background-color: red;
    cursor: not-allowed;
  }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOG IN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT YOUR PASSWORD ?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
