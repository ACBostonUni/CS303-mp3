import {StyledBUPhoto, StyledH5, StyledNWECHSPhoto, StyledText} from "../StyledComponents.tsx";
import BUPhoto from "../../assets/boston_university_terriers_logo_secondary_20156280.png"
import NwechsPhoto from "../..//assets/Screenshot_20260920_130634_Chrome.jpg"
export default function Eduction(){


    document.title = "Education | AC Resume"


    return (
        <>

            <StyledH5>Education</StyledH5>
            <StyledBUPhoto src={BUPhoto} alt="Boston University Logo"/>

            <StyledText>Boston University at Boston, MA</StyledText>
            <StyledText>Bachelor of Arts in Computational Science (Expected May 2028)</StyledText>

            <StyledNWECHSPhoto src={NwechsPhoto} alt="NorthWest Early College High School Logo"/>
            <StyledText></StyledText>
            <StyledText>Northwest Early College High School and El Paso Community College at El Paso, TX</StyledText>
            <StyledText> Associate of Arts in Multidisciplinary Studies (Recieved May 2024) </StyledText>


        </>

    )


}