import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
  background-color:#0b0b0b ;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items:center;
   
  ${Container}
`;

export const NavLogo = styled.img`

    justify-self: flex-start;
    cursor: pointer;
    width:11rem;
    height:2.2rem;
    display: flex;
    padding: 8px 16px;
  
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
    
   

    @media screen and (max-width:990px){
        display:flex;
        flex-direction: column;
        width:100%;
        height:90vh;
        position:absolute;
        top:4rem;
        left:${({ click }) => (click ? 0 : '-100%')};
        opacity:1;
        transition: all 0.5s ease;
        background: ${(props) => (props.theme.color.primary)};
         font-size: 1rem;
    }

`;

export const NavItem = styled.div`
    height:4rem;
     padding:0.5rem 1.5rem;
      

    &:hover{
        color:${(props) => (props.theme.color.light)};
    }

    @media screen and(max-width:960px){
        width:100%;
        padding:2rem;
    }
`;

export const NavLinks = styled.div`
    color:${(props) => (props.theme.color.lightAlt)};
    display:flex;
    align-items: center;
    text-decoration: none;
    height:100%;
    cursor:pointer;

    &:hover{
        color:${(props) => (props.theme.color.light)};
        transition:all 0.3s ease;
    }
    
    @media screen and(max-width:960px){
        width:100%;
        text-align: center;
        display:table;
      
    }
`;

export const NavItemBtn = styled.li`

    @media screen and (max-width:960){
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
    padding: 8px 16px;
    height:100%;
    width:100%;
    border:none;
`;