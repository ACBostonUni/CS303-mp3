import styled from "styled-components";

const Footer = styled.footer`
    
        padding-left: 2%;
        padding-top: 2%;
        height: 10vh;
        background-color: #D45B5B;
    

`

export default function FooterComp(){
    return(
        <Footer>
            <p>All Rights Reserved by Austin Camanez <a href="" className="Credits-text"> Credits</a> &copy</p>
        </Footer>
    )


}