import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return ''
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login With Google
            </a>
          </li>
        )
      default:
        return [
          <li key="1"><Payment/></li>,
          <li key="2" style={{margin: "0 10px"}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render() { 
    return (      
      <nav style={{width: "40em", borderRadius: "10px", background: "linear-gradient(180deg, #EE6E73 0%, #D5649B 100%)", padding: "0.5em", boxShadow: "box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.16)", padding: 0, fontFamily: "Poppins", marginTop: "1em"}}>
        <div style={{padding: "0 1em"}}>
          <Link 
            to={this.props.auth ? '/surveys' : '/'}
            style={{fontSize: "30px"}} 
          >
            Emaily     
          </Link>
          <ul style={{margin: 0}} className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
 
function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps)(Header);