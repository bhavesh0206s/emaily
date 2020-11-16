import React from 'react';

const SurveyField = ({input, label, meta: {touched, error}}) => {
  return (
    <div>
      <div class="input-field">
        <input {...input} placeholder={label} id={label} type="text" class="validate"  style={{marginBottom: 5}} />
        <label style={{color: '#323f54', fontWeight: 'bold'}} for={label}>{label}</label>
      </div>
      <div className='red-text' style={{marginBottom: 20}} >
        {touched && error}
      </div>
    </div>
  );
}
 
export default SurveyField;