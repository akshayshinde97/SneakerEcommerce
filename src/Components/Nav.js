import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
height: 77px;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Nav = () => {
  return <> 
  <Container>
      <Wrapper>
        <Left>
            <Logo>
              <Link to="/">ECOM.</Link> 
           </Logo>
        </Left>
       <Center> 
          <Language>
                EN
          </Language>
       </Center>
       <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sigin</MenuItem>
          <MenuItem>
          <Badge badgeContent={2} color="primary">
            <Link to="/cart">
            <AddShoppingCartOutlinedIcon />
            </Link>
            </Badge>
          </MenuItem>

        </Right>
      </Wrapper>
  </Container>
    
  
  </>;
};

export default Nav;



