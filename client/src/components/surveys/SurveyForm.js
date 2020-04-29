import React from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';


class SurveyForm extends React.Component {

  renderField(){
    return formFields.map(({label, name}) => {
      return (
        <Field key={name} component={SurveyField} type='text' label={label} name={name} />
      )
    })
  }

  render() { 
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderField()}
        <Link to='/surveys' className='red btn-flat white-text'>
          Cancel
        </Link>
        <button type='submit' className='teal btn-flat right white-text'>
          Next
          <i className='material-icons right'>done</i>
        </button>
      </form>
      </div>
    );
  }
}
 
function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'You must enter a title!'
  }
  if(!values.subject){
    errors.subject = 'You must enter a subject!'
  }
  if(!values.body){
    errors.body = 'You must enter a body!'
  }

  errors.recipients = validateEmails(values.recipients || '')

  return errors
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);