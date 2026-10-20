import styled from "styled-components";
// This is a file I used to house most of my styles. I used it to have cleaner files,
// but most importantly for styled components that I used repetitively across multiple main components
export const StyledH5 = styled.h5`
    
    color: #4A4A4A;
    font-size: calc(3px + 1.5vw);
    margin-top: 2%;
    margin-bottom:2%;
    
    @media screen and (max-width: 800px){
        font-size: calc(9px + 1.2vh);
    }
`

export const StyledText = styled.p`
    margin: 1%;
    color: #4A4A4A;
`

export const StyledUL = styled.ul`
    padding-left: 0;
    
    li {
        margin-top: 2%;
        margin-bottom: 2%;
        list-style: none;
        color: #4A4A4A;
    }
    
    
`

export const StyledACPhoto = styled.img`
    height: auto;
    max-width: 35%;
    margin: 3% 0;
    
    
    @media screen and (max-width: 800px){
        height: auto;
        max-width: 55%;
        
    }
    
`

export const StyledCNPhoto = styled.img`
    height: auto;
    max-width: 60%;
    margin: 2% 0;
    
`

export const StyledBUPhoto = styled.img`
    height: auto;
    max-width: 35%;
    
`

export const StyledNWECHSPhoto = styled.img`
    height: auto;
    max-width: 35%;
    margin: 2% 0;

`
export const StyledSkillsPhoto = styled.img`
    height: auto;
    max-width: 25%;
    margin: 2% 0;
    
    @media screen and (max-width: 800px){

        height: auto;
        max-width: 33%;
        
    }

`
export const StyledACHPhoto = styled.img`
    height: auto;
    max-width: 25%;
    margin: 2% 0;
    
    @media screen and (max-width: 800px){
        height: auto;
        max-width: 30%;
    }

`
export const StyledCalcPhoto = styled.img`
    height: auto;
    max-width: 25%;
    margin: 3% 0;
    
    @media screen and (max-width: 800px){
        height: auto;
        max-width: 27%;
        
    }

`


export const StyledCalcForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media screen and (max-width: 800px){

        flex-direction: column;
        
    }

`

export const StyledLabel = styled.label`
    margin: 4% 0;
    font-family: "Bauhaus 93", Playbill, sans-serif;
    font-size: calc(8px + 1.5vw);

`

export const StyledOutputBox = styled.div`


    margin: 2% auto 0;
    background-color: #FFFFFF;
    width: 50%;
    height: 10%;
    border-color: #D45B5B;
    border-width: 4px;
    border-style: ridge;
    font-size: calc(6px + 1.7vw);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    @media screen and (max-width: 800px){

       
        padding-top: 1%;
        height: 8vh;
        font-size: calc(12px + 1.7vw);
        
        
    }

`

export const StyledInputBox = styled.input`
    width: 70%;
    height: 100%;
    padding: 3%;
    margin-left: 7%;
    margin-right: 7%;
    text-align: center;
    font-size: calc(6px + 1.2vw);
    font-family: "Agency FB", sans-serif;
    border-color: #D45B5B;
    border-width: 4px;
    border-style: ridge;

    @media screen and (max-width: 800px){
        width: 60%;
        height: 7vh;
        margin-left: 9%;
        font-size: calc(7px + 1.8vw);
    }
`
export const StyledCalcButton = styled.button`

    margin-left: 2%;
    margin-right: 2%;
    font-size: calc(4px + 1.2vw);
    padding: 1% 2.7%;
    border-radius: 50%;
    background-color: #D45B5B;
    border-color: #FCFAF5;
    border-width: 6px;
    border-style: ridge;
    color: #FCFAF5;
    font-family: "Bauhaus 93" , sans-serif;

    @media screen and (max-width: 800px){

        font-size: calc(8px + 1.5vw);
        
    }


`
export const StyledCalcContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 7%

`

export const StyledH6 = styled.h6`
    color: #FCFAF5;
    font-size: calc(2px + 1.5vw);
    display: inline;
`

export const StyledH4 = styled.h4`
    color: #2c2c2c;
    font-family: "Agency FB", sans-serif;
`
export const StyledH4Red = styled.h4`
    color: #de5656;
    font-family: "Agency FB", sans-serif;
`