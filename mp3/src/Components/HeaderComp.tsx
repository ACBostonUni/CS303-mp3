import styled from "styled-components";

const Header = styled.header`
    background-color: #D45B5B;
    padding: 1% 1% 1% 7%;
    margin: 0;
    height: 10%;
    h1{
        color: #FCFAF5;
    }
    h3{
        color: #FCFAF5;
    }
    
`

export default function HeaderComp(){
    return(
        <Header>
            <h1>Austin Armando Camanez</h1>
            <h3>My 2026 Online Resume</h3>
        </Header>
    )


}