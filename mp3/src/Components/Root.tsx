import styled from 'styled-components';
import HeaderComp from "./HeaderComp.tsx";
import BodyComp from "./BodyComp";
import FooterComp from "./FooterComp.tsx";
// Maybe just build the header , this, then footer

const StyledWrapper = styled.div`
    width: 85%;
    margin: 0 auto;

    @media screen and (max-width: 800px){
        width: 90%;
    }
`
export default function Root(){
    return(
        <>
            <StyledWrapper>


                <HeaderComp />

                <BodyComp />

                <FooterComp />

            </StyledWrapper>

        </>
    )
}