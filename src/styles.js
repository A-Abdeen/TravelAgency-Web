import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { MdCenterFocusStrong } from "react-icons/md";

export const NavStyled = styled.nav`
background-color: #ECF0F1;
color: gray;
font-family: serif;
padding:25px

`;

export const Logo = styled(Link)`
  img {
    width: 5rem;
  }
`;

export const NavItem = styled(NavLink)`
  color: black;
  padding: 0.25em 1em;
  &.active {
    color: red;
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: #e74c3c;
  border-color: #e74c3c;  
  color: white;
`;

export const AuthForm = styled.div`
position: relative;
padding: 30px;
margin:100px;
`;


export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  color: black;
`;

export const Description = styled.h3`
  text-align: center;
  margin-top: 80px;
  color:gray;
`;

export const Form = styled.form`
color:white;
background-color: #737373;
display:inline-block;
padding: 30px;
margin:200px;
margin-top:20px;
border: 1px solid #e6e6e6;
justify-items: center;
width:70%;




`;

export const FormTitle = styled.h4` 
display: block;
margin:80px;
width: 50%;
justify-items: center;
color:gray;

`;

export const AddFlight = styled.button` 
background-color: #e74c3c;
border-color: #e74c3c;
color:white;
margin:25px;
`;

export const FlightCard = styled.div` 
display: block;
margin-left:100px;
margin-top:35px;
width: 50%;
justify-items: center;

`;

export const SearchFlight = styled.div` 
color: #737373;
border-color: #737373;
background-color: #ECF0F1;
padding:75px;



`;

export const SearchButton = styled.button` 
background-color: #e74c3c;
border-color: #e74c3c;
cursor: pointer;
color:white;
margin-left:900px;

`;
export const SearchBox = styled.div` 
color:white;
background-color: #075AAA;
display: block;
position: relative;
padding: 30px;
margin:70px;
border: 1px solid #e6e6e6;

`;

export const Table = styled.table`
margin:25px;

tr {
  font: 16px bold sans-serif;
  font-weight: bold;
}
td {
  color:#075AAA;

}
}
`;

export const TripButton = styled.input`
background-color:red;

`;

export const RadioButton = styled.input`
margin-left:0px;

`;


