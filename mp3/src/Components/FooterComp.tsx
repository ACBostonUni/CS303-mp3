import styled from "styled-components";
import {Link} from "react-router";
import {StyledH6} from "./StyledComponents.tsx";

export const StyledLink = styled(Link)`/*Slight difference in how the styles are declared for the link styles*/
    text-decoration: none;
    color: #FCFAF5;
    font-size: calc(2px + 1.5vw);
    display: inline;
    // Styles for the link (Not rlly a link just the credits)
    
    
`
const Footer = styled.footer`
    
        padding-left: 2%;
        padding-top: 3%;
        height: 10vh;
        background-color: #D45B5B;
    
    @media screen and (max-width: 800px){
        height: 5vh;
    }
        
    

`


export default function FooterComp(){
    return(
        <Footer>
            <StyledH6>All Rights Reserved by Austin Camanez <StyledLink to={""}>Credits </StyledLink> ©</StyledH6>
        </Footer>
    )


}