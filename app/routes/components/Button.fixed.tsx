import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className, ariaLabel }) => {
    return (
        <button onClick={onClick} className={className} aria-label={ariaLabel || text}>
            {text}
        </button>
    );
};

export default Button;