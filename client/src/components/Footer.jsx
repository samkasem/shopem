import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from '@material-ui/icons'
import { Email } from '@mui/icons-material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import RoomIcon from '@mui/icons-material/Room'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responseive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1.5;
  padding: 20px;
  ${mobile({ display: 'none' })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP`EM</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dolore?
        </Desc>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Pinterest />
          </SocialIcon>
          <SocialIcon color='3b5999'>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WhisList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          123 Wicker Path , South MagicCity 123456
        </ContactItem>
        <ContactItem>
          <PhoneIphoneIcon style={{ marginRight: '10px' }} />
          +1 234 567
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} />
          contact@shopem.com
        </ContactItem>
        <Payment src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png' />
      </Right>
    </Container>
  )
}

export default Footer
