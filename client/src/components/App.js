import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from '../components/surveys/SurveyNew'


class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchUser();
  }

  render() { 
    return ( 
      <div>
        <BrowserRouter>
          <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <Header/>
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
 
export default connect(null, actions)(App);
