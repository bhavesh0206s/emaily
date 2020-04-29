import React from 'react';

const SurveyField = ({input, label, meta: {touched, error}}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: 5}} />
      <div className='red-text' style={{marginBottom: 20}} >
        {touched && error}
      </div>
    </div>
  );
}
 
export default SurveyField;