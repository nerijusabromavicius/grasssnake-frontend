import React from 'react';
import Input from './Input';

const placeholder = 'Enter sequence'

const FormView = ({ value, onChange, onSubmit, ...props }) => {
    return (
        <form onSubmit={ onSubmit } className="search">
          <label>
            <Input className="searchTerm" type="text" value={value} onChange={onChange} placeholder={placeholder} {...props}/>
          </label>
            <Input className="searchButton" type="submit" value="Submit" />
        </form>
      );
};

export default FormView;