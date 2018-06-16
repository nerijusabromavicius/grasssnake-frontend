import React from 'react';
import Input from './Input';

const placeholder = 'Enter sequence'

const FormView = ({ value, onChange, onSubmit, ...props }) => {
    return (
        <form onSubmit={onSubmit}>
          <label>
            <Input type="text" value={value} onChange={onChange} placeholder={placeholder} {...props}/>
          </label>
          <Input type="submit" value="Submit" />
        </form>
      );
};

export default FormView;