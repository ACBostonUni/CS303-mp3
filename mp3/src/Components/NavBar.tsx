import styled from "styled-components";
import {Link} from "react-router";
const NavBar = styled.nav`
    {
        background: linear-gradient(to right, #F5EBEB 95%, #FCFAF5 100%); /*I googled the syntax to make a gradient transition between nav and main*/
        padding: 1% 2%;                                                     /* I chose 95% because I like the sharp gradient effect*/
        width: 20%;


    }

    ul {
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {
        margin: 5% 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #85A070;
        color: #FCFAF5;
        width: 12vw;
        height: 11vh;


    }

    a {
        color: #FCFAF5;
        font-family: "Arial Black", sans-serif;
        font-size: calc(2px + 1.2vw);
        text-decoration: none;
    }
    
`

export default function NavBarComp(){
    return(
        <NavBar>

                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/education"}>Education</Link> </li>
                    <li><Link to={"/work-experience"}>Work Experience</Link> </li>
                    <li><Link to={"/achievements"}>Achievements</Link> </li>
                    <li> <Link to={"/skills"}>Skills</Link> </li>
                    <li> <Link to={"/projects"}>Projects</Link> </li>
                </ul>


        </NavBar>
    )


}