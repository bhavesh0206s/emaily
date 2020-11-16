import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as action from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewForm = formFields.map(({label, name}) => {
    return (
      <div key={name}>
        <label style={{padding: "10px 0px",fontSize: '1.2em'}}>{label}</label>
        <div style={{paddingBottom: "10px",fontSize: '1.3em'}}>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div className='survey_form' style={{marginTop: '7em'}}>
      <div>
        <h3 className='form_title'><span>Please review your survey</span></h3>
      </div>
      {reviewForm}
      <button className="yellow waves-effect waves-light darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button onClick={()=> submitSurvey(formValues, history)} className="green waves-effect waves-light btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {formValues: state.form.surveyForm.values}
}
 
export default connect(mapStateToProps, action)(withRouter(SurveyFormReview));