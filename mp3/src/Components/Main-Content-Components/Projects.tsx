import {useState} from "react";
import {
    StyledCalcButton,
    StyledCalcContainer,
    StyledCalcForm,
    StyledCalcPhoto, StyledH4,
    StyledH5, StyledInputBox, StyledLabel, StyledOutputBox, StyledH4Red

} from "../StyledComponents.tsx";
import CalcPhoto from "../../assets/hand-drawn-calculator-illustration-png.webp";

export default function Projects(){

    // Make the vars kinda like how we used let in mp1 but now we are using useState
    const [num1, setNum1] = useState(""); // Using a string that way we can have a completely clear input box at start
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState("");


    // Now above the return we will write our functions.

    function doAdd() {
        setOutput(String(Number(num1) + Number(num2)));
    }

    function doSubtract() {
        setOutput(String(Number(num1) - Number(num2)));
    }

    function doMultiply() {
        setOutput(String(Number(num1) * Number(num2)));
    }

    function doDivide() {
        setOutput(String(Number(num1) / Number(num2)));
    }

    function doPower() {
        let castednum1 = Number(num1) // Webstorm complains about a redundant variable but I did this to avoid casting num1 to Number every single loop.
        let res = castednum1;
        for (let i = 1; i < Number(num2); i++){
            res = res * castednum1
        }
        setOutput(String(res));
    }

    function doClear() {
        setNum1("");
        setNum2("");
        setOutput("");
    }

    return (
        <>
            {
                document.title = "Projects | AC Resume"
            }

            <StyledH5> Calculator Project !</StyledH5>

            <StyledCalcPhoto src={CalcPhoto} alt="Clip Art of a hand drawn calculator"/>

            <StyledCalcContainer>
                <StyledCalcForm>
                    <StyledLabel htmlFor="num1">Num1</StyledLabel>
                    <StyledInputBox value = {num1} onChange={(event) => setNum1(event.target.value)}/>


                    <StyledLabel htmlFor="num2">Num2</StyledLabel>
                    <StyledInputBox value = {num2} onChange={(event) => setNum2(event.target.value)}/>
                </StyledCalcForm>

            </StyledCalcContainer>

            <StyledCalcContainer>
                <StyledCalcButton onClick={doAdd}>+</StyledCalcButton>
                <StyledCalcButton onClick={doSubtract}>-</StyledCalcButton>
                <StyledCalcButton onClick={doMultiply}>*</StyledCalcButton>
                <StyledCalcButton onClick={doDivide}>/</StyledCalcButton>
                <StyledCalcButton onClick={doPower}>**</StyledCalcButton>
                <StyledCalcButton onClick={doClear}>C</StyledCalcButton>
            </StyledCalcContainer>


            <StyledLabel htmlFor="output"> Output </StyledLabel>
            <StyledOutputBox>
                {
                    (Number(output) >= 0) ? <StyledH4>{output}</StyledH4> : <StyledH4Red>{output}</StyledH4Red> // Shorthand if statement :)
                }
            </StyledOutputBox>


        </>

    )


}