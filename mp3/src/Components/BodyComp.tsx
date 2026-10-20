import styled from "styled-components";
import Nav from "./NavBarComp.tsx";
import {Route, Routes} from "react-router";
import Home from "./Main-Content-Components/Home.tsx";
import Education from "./Main-Content-Components/Education.tsx";
import Work_Experience from "./Main-Content-Components/Work-Experience.tsx";
import Achievements from "./Main-Content-Components/Achievements.tsx";
import Skills from "./Main-Content-Components/Skills.tsx";
import Projects from "./Main-Content-Components/Projects.tsx";


const BodyStyling = styled.div`
    // Content styling
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 150%;
    padding: 0;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

const MainStyles = styled.div`
    background-color: #FCFAF5;
    font-size: calc(2px + 1.4vw);
    width: 80%;
    text-align: center;
    padding: 2% 5%;
    
    @media screen and (max-width: 800px){
        width: 90%;
        height: 100%;
        font-size: calc(5px + 1.2vh);
    }

`

export default function BodyComp() {



    return (
        <>

        <BodyStyling>

            <Nav/>

            <MainStyles>

                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/education"} element={<Education />}/>
                    <Route path = {'/work-experience'} element={<Work_Experience />}/>
                    <Route path = {'/achievements'} element={<Achievements />}/>
                    <Route path = {'/skills'} element={<Skills />}/>
                    <Route path = {'/projects'} element={<Projects />}/>
                </Routes>

            </MainStyles>


        </BodyStyling>


        </>
        )

}