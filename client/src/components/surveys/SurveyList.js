import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component {
  
  componentDidMount(){
    this.props.fetchSurveys();
  }  

  renderSurveys(){
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1 survery__card">
          <div className="card-content text-white">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSend).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      )
    })
  }

  render() { 
    return ( 
      <div style={{marginTop: '7em'}}>
        {this.renderSurveys()}
      </div>
     );
  }
}

function mapStateToProps(state){
  return {surveys: state.surveys}
}
 
export default connect(mapStateToProps, {fetchSurveys})(SurveyList);