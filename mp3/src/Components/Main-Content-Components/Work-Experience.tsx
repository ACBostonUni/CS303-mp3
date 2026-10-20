import {StyledCNPhoto, StyledH5, StyledText} from "../StyledComponents.tsx";
import CNPhoto from "../../assets/Code_Ninjas_Color_Horizontal_Logo.jpg";



export default function WorkExperience(){
    return (



        <>

            {
                document.title = "Work-Experience | AC Resume"
            }

            <StyledH5>Work Experience</StyledH5>

            <StyledCNPhoto src={CNPhoto} alt="Code Ninjas Corporation Logo"/>
            <StyledText>
                Code Sensei
            </StyledText>
            <StyledText>
                Code Ninjas, El Paso, TX June 2025-August 2025
            </StyledText>
            <StyledText>
                Worked as a team member in teaching a proprietary computer science curriculum to young minds eager to
                learn
                about computer science.
                This job requires skilled communication and teaching skills to engage kids in the learning of many
                different
                coding concepts.
            </StyledText>

            <br/>
            <StyledText>
                Code Sensei
            </StyledText>

            <StyledText>
                Code Ninjas, El Paso, TX June 2023-August 2024
            </StyledText>

            <StyledText>
                Worked as a team member in teaching a proprietary computer science curriculum to young minds eager to
                learn
                about computer science.
                This job requires skilled communication and teaching skills to engage kids in the learning of many
                different
                coding concepts.

            </StyledText>


       </>

    )


}