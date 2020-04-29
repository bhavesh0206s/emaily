import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as action from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewForm = formFields.map(({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h4>Please review your survey</h4>
      {reviewForm}
      <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button onClick={()=> submitSurvey(formValues, history)} className="green btn-flat right white-text">
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