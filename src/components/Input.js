import React from 'react';

const Input = ({ placeholder, type, onChange, value, ...props }) => {
    return (
        <input
            type = { type } 
            onChange = { onChange } 
            placeholder = { placeholder }
            value = { value }
            {...props}
        />
    );
};

export default Input;