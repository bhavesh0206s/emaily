import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList/>
      <div className="fixed-action-btn" >
        <Link to='/surveys/new'>
        <a class="btn-floating btn-large waves-effect waves-light teal">
            <i class="material-icons">add</i>
          </a>
        </Link>
      </div>
    </div>
  );
}
 
export default Dashboard;