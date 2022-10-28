import style from "styled-components";

export const InputCardContainer = style.div`
    display: block;
    width: 30%;
    padding: 30px;
    height: 10rem;
    margin-top: 200px;
    text-align: center;
    justify-content:center;
    align-items:center;
    background-color: #16679a;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`;

export const InputCardTitle = style.h1`
    color: #fff;
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap');
    `;
export const InputCardInput = style.input`

    &: hover{
        border: 1px solid #aaa;
    }
    &{
    type: text;
    box-sizing: border-box;
    display: block;
    width: 80%;
    padding: 10px;
    margin: 10px 40px;
    border-radius:10px;
    border: 1px solid #eee;
    transition: .3s border-color;
    }
`;

export const InputCardButton = style.button`
    background-color: #fff;
    color: #457b9d;
    border-radius: 10px;
    padding: 10px;  
    font-weight: bold;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);

    &: hover{
        background-color: #16679a;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        font-weight: bold;
    }
`
