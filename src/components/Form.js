import React from 'react';
import './Form.css';

const Form = ({ value, dueDate, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input value={value} name="text" onChange={onChange} onKeyPress={onKeyPress}/>&nbsp;
            <input value={dueDate} name="dueDate" type="date" onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={ (value != '' && dueDate != '') && onCreate }>
                추가
            </div>
        </div>
    );
};

export default Form;