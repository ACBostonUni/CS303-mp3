import {Routes, Route} from "react-router";
import Home from "./Main-Content-Components/Home.tsx";
import Education from "./Main-Content-Components/Education.tsx";
import Work_Experience from "./Main-Content-Components/Work-Experience.tsx";
import Achievements from "./Main-Content-Components/Achievements.tsx";
import Skills from "./Main-Content-Components/Skills.tsx";
import Projects from "./Main-Content-Components/Projects.tsx";
import Nav from "./NavBar.tsx"

export default function Root(){
    return(
        <>
            <Nav/>
            <Routes>
                <Route path={"/"} element={Home}/>
                <Route path={"/education"} element={Education}/>
                <Route path = {'/work-experience'} element={Work_Experience}/>
                <Route path = {'/achievements'} element={Achievements}/>
                <Route path = {'/skills'} element={Skills}/>
                <Route path = {'/projects'} element={Projects}/>


            </Routes>



        </>
    );
}