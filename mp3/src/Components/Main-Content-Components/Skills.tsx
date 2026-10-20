import {StyledH5, StyledSkillsPhoto, StyledUL} from "../StyledComponents.tsx";
import SkillsPhoto from "../../assets/life-skills.png";
export default function Skills(){


    document.title = "Skills | AC Resume"


    return (

        <>


            <StyledH5>
                Skills and Talents
            </StyledH5>
            <StyledSkillsPhoto src={SkillsPhoto}alt="Clip art of gears turning in a man's head"/>
                <StyledUL>
                    <li>Detail Oriented</li>
                    <li>Develops positive workplace relationships</li>
                    <li>Office Suite Knowledge</li>
                    <li>Self-Directed</li>
                    <li>Problem-Solving</li>
                    <li>Excellent written and oral communication skills</li>
                    <li>Friendly, positive attitude</li>
                    <li>Proficient in smartphone know-how and technical operations</li>
                    <li>Research Oriented</li>
                    <li>Analytical and Critical Thinking</li>
                    <li>Investing and Financial Skills</li>

                </StyledUL>
        </>

    )


}