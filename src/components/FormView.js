import React from 'react';

const FormView = ({ value, placeholder, type, onChange, onSubmit, ...props }) => {
    return (
        <form onSubmit={onSubmit}>
          <label>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} {...props}/>
          </label>
          <input type={type} value="Submit" />
        </form>
      );
};

export default FormView;