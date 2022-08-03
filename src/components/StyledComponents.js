import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const themes={
    light:{
        bg:"white",
        text:"#27292D",
        contrast: "#CED8E4" ,
        border: "#BCCCDC",
        highlight: "#3E5A75",
        primary:"#6990E7",
        secondary:"#848A94"

    },
    dark:{
        bg:"#191A1C",
        text:"white",
        contrast:"#27292D",
        border: "#18191B" ,
        highlight: "#777D88",
        primary:"#6990E7",
        secondary:"#848A94"
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

export const ButtonPrimary = styled.button`
    border-radius: 6px;
    padding: 8px;
    font-size: 14px;
    ${({theme: {theme}})=> `
        border: 1px solid ${themes[theme].primary};
        background: ${themes[theme].primary} 
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