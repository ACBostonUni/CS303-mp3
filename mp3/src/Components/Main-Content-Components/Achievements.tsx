import {StyledACHPhoto, StyledH5, StyledUL} from "../StyledComponents.tsx";
import ACHPhoto from "../../assets/achimg.png";

export default function Eduction(){
    return (

        <>
            {
                document.title = "Achievements | AC Resume"
            }

            <StyledH5>Achievements</StyledH5>
            <StyledACHPhoto src={ACHPhoto} alt="Clip art of an achievement badge"/>
            <StyledUL>
                <li>Questbridge Scholar (Questbridge)</li>
                <li> AP Scholar (College Board)</li>
                <li> National Hispanic Recognition (College Board)</li>

                <li> Deans List (Northwest ECHS/ El Paso CC) (8 semesters)</li>
                <li> Deans List (Boston University) (3 semesters)</li>

                <li> Certification in level 1 Python and Java</li>
            </StyledUL>


       </>
    )


}