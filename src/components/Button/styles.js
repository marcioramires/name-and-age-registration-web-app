import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 74px;
    ${(props) => props.isBack ? `background: transparent;` : `background: rgba(0, 0, 0, 0.8);`};
    border-radius: 14px;
    ${(props) => props.isBack ? `border: 1px solid white;` : `border: none;`};
    margin-top: 130px;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img {
    ${(props) => props.isBack && `transform: rotateY(180deg);`}
}
`
