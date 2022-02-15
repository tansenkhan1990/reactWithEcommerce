import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height:60px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display : flex;
justify-content : space-between;
`
const Left = styled.div`
flex : 1;
`
const Language = styled.div`
font-size: 30px;
cursor:pointer;
`
const Center = styled.div`flex : 1;`
const Right = styled.div`flex : 1;`
function Navbar() {
  return (
   <Container>
       <Wrapper>
           <Left>pokemon left <Language>EN</Language></Left>
           <Center>Center</Center>
           <Right>right</Right>
       </Wrapper>
   </Container>
  )
}

export default Navbar