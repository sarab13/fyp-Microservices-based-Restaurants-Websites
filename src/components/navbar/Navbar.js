import React from 'react'
import styled from "styled-components"
import {mobile} from "../../responsive"
import { useState } from "react";

const Container=styled.div`
height: 80px;

background-color: #faeceb;
margin-bottom: 10px;
position: sticky;



`
const Wrapper=styled.div`
${mobile({padding:"10px 0px"})}
padding-right: 10px;
padding-left: 10px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Left=styled.div`
width: 55%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:'30%'})}


`
const Image=styled.img`
height: 60px;
width: 60px;
object-fit: contain;
margin-bottom: 0px;
${mobile({paddingLeft:'10px',paddingRight:'10px'})}



`
const Logo=styled.h1`
font-weight: bold;
margin-left: 0px;
text-decoration: underline crimson;
${mobile({fontSize:'20px',marginLeft:"0px",paddingRight:'10px'})}


`
const Menu=styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
@media (max-width: 768px) {
  flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
  }

`
const MenuItem=styled.li`
margin-right: 25px;
font-size: 18px;
font-weight: bold;
color: black;
cursor: pointer;
&:hover{
    color: red;
}



`
const BookTable=styled.h1`
font-size: 18px;
cursor: pointer;

color: black;
&:hover{
    color: red;
}
${mobile({fontSize:'15px',paddingLeft:'50px',display:'none'})}

`
const PhoneNo=styled.div`
border: 2px solid ;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;

${mobile({display:"none"})}

`
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
            <Wrapper>
            <Left>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQd-XvQDRY-JrAvmY0oX4eIGzpFZ686u_u2A&usqp=CAU'/>
            <Logo>Restaurco</Logo>
            
            <Menu open={open}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Menu</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contact</MenuItem>
                

            </Menu>
            
            </Left>
            <BookTable>Book a Table</BookTable>
            <PhoneNo>+10(32)45 4444 5555</PhoneNo>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
            
            
            </Wrapper>
        </Container>
  )
}

export default Navbar