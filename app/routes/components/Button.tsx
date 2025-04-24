import React from 'react';

type ButtonType = {
    text:string
}

const Button:React.FC<ButtonType> = ({text}) =>{
    return <button>{text}</button>
}