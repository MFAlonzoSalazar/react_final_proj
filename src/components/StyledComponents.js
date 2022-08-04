import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const themes={
    light:{
        bg:"white",
        text:"#27292D",
        contrast: "#CED8E4" ,
        border: "#BCCCDC",
        highlight: "#3E5A75",
        shadow: "#19429A",
        shadowContrast: "#DEE5ED"
    },
    dark:{
        bg:"#191A1C",
        text:"white",
        contrast:"#27292D",
        border: "#18191B" ,
        highlight: "#777D88",
        shadow: "black",
        shadowContrast: "#2f3237"
    },
   
}

export const AppBackground = styled.div`
    text-align: center;
    ${({theme: {theme}})=> `
        background-color: ${themes[theme].bg};
        color:  ${themes[theme].text};
    `}
` 

export const AppHeader = styled.header`
    padding-right: 20px;
    padding-left: 50px;
    border-radius: 6px;
    ${({theme: {theme}})=> `
        background-color: ${themes[theme].contrast};
        border: 2px solid ${themes[theme].border};
    `}
`
export const AppFooter = styled.footer`
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        border-radius: 6px;
        text-align: center;
    ${({theme: {theme}})=> `
        background-color: ${themes[theme].contrast};
        color:  ${themes[theme].text};
        border: 2px solid ${themes[theme].border};
    `}
`;

export const StyledLink = styled.p`
    ${({theme: {theme}})=> `
        width: 100%;
        height: 100%;
        color:  ${themes[theme].text};
        &:hover {
            color: ${themes[theme].border};
        }
    `}
`

export const StyledButton = styled.button`
    border-radius: 6px;
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    ${({theme: {theme}})=> `
        color: ${themes[theme].text};
        border: 1px solid ${themes[theme].border};
        background: ${themes[theme].contrast}; 
        &:hover{
            box-shadow: inset 0 0 5px ${themes[theme].shadow} ;
        }
        &:active {
            background: ${themes[theme].shadowContrast};
            box-shadow: inset 0 0 5px ${themes[theme].shadow} ;
        }
    `}
`
export const ProductCardButton = styled.button`
    display: flex;
    border-radius: 20px;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    padding: 20px;
    ${({theme: {theme}})=> `
        border:6px solid ${themes[theme].border}; 
        &:hover {
            border: 6px solid ${themes[theme].highlight};
        }
    `}
`
export const ProductsHeader = styled.h1`
    text-align: left;
    padding-left: 80px;
`
export const GlobalStyles = createGlobalStyle`
    body {
        ${({theme: {theme}})=> `
            background: ${themes[theme].bg}
        `}
    }
`
export const CartDisplayDiv = styled.div`
    display: flex;
    padding: 40px;
    width: 50%;
    ${({theme: {theme}})=> `
        border-bottom: 1px solid ${themes[theme].shadow};
    `}

`
export const StyledContainer = styled.div`
    ${({theme: {theme}})=> `
        border-top: 1px solid ${themes[theme].shadow};
    `}
`
export const CartItems = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 30px; 
    align-content:center;
    align-items:center;
    width: 50%;
`
export const CartProductInfo = styled.p`
    font-weight: bold;
`
export const CartProductImg = styled.img`
    max-width: 80px;
    max-height: 130px;
    width: auto;
    height: auto;
`