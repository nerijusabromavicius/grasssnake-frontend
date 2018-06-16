import React from 'react';

const Input = ({ value, placeholder, type, onChange, ...props }) => {
    return (
        <input
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            {...props}
        />
    );
};

export default Input;