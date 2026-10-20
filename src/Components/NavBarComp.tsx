import styled from "styled-components";
import {Link} from "react-router";

const NavBar = styled.nav`
    
        background: linear-gradient(to right, #F5EBEB 95%, #FCFAF5 100%); /*I googled the syntax to make a gradient transition between nav and main*/
        padding: 1% 2%;                                                     /* I chose 95% because I like the sharp gradient effect*/
        width: 20%;
    
        
       

    @media screen and (max-width: 800px){
        width: 96%;
        height: 10vh;
        background: linear-gradient(to bottom, #F5EBEB 90%, #FCFAF5 100%);
    }


`
const NavUL = styled.ul`
    padding-left: 0;
  
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: row;
        margin: auto
        
    }
`

const NavLi = styled.li` 

    margin: 5% 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #85A070;
    color: #FCFAF5;
    width: 12vw;
    height: 11vh;
    
    @media screen and (max-width: 800px){
        margin: 2% 0.5%;
        height: 6vh;
        width: 20vw;
        padding: 1%;
    }
`
const NavLink = styled(Link)` /* So I found out Link isn't created the same for styles you need to do styled(Link)
                                                      An interesting but important piece of information*/
    color: #FCFAF5;
    font-family: "Arial Black", sans-serif;
    font-size: calc(2px + 1.2vw);
    text-decoration: none;
    
    @media screen and (max-width: 800px){
        font-size: calc(3px + 1.2vh);
    }
`



export default function NavBarComp(){
    return(
        <NavBar>

                <NavUL>
                    <NavLi><NavLink to={"/"}>Home</NavLink></NavLi>
                    <NavLi> <NavLink to={"/education"}>Education</NavLink> </NavLi>
                    <NavLi><NavLink to={"/work-experience"}>Work Experience</NavLink> </NavLi>
                    <NavLi><NavLink to={"/achievements"}>Achievements</NavLink> </NavLi>
                    <NavLi> <NavLink to={"/skills"}>Skills</NavLink> </NavLi>
                    <NavLi> <NavLink to={"/projects"}>Projects</NavLink> </NavLi>
                </NavUL>


        </NavBar>
    )


}