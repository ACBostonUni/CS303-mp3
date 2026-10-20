import {Link} from "react-router"
import { StyledH5, StyledText , StyledACPhoto} from "../StyledComponents.tsx";
import ACPhoto from "../../assets/Screenshot_20260920_103822_Photos.jpg"


export default function Home() {

    return (

        <>

            {
                document.title = "Home | AC Resume"
            }
            <StyledH5>Home</StyledH5>

            <StyledACPhoto src={ACPhoto} alt="Austin Armando Camanez" id="ACPhoto"/>
            <StyledText> I am a current Boston University student seeking a computer science degree. I love to be positive and
                work hard at
                all that I do. I feel going above and beyond is required of me, and it makes me feel good in doing so.
                I work very well in a team, and I like to bring fresh perspectives or raise solutions to expected
                outcomes.

                I am looking to further my computer science knowledge and work hard with others to power the future.
            </StyledText>

            <StyledText>
                Welcome to my website, here you will find my <Link to ={"/education"}> Education</Link>,
                <Link to={"/work-experience"}> Work Experience</Link>, as well as some of my
                <Link to={"/achievements"}> Accomplishments</Link>.

            </StyledText>

            </>


            );
}