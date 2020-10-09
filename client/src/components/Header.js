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
        const googleSigninBtnStyling = {
          fontWeight: '500',
          padding: '0 16px 0 0',
          textTransform: 'none'
        };
        const flexWrapperStyling = {
          alignItems: 'center',
          display: 'flex',
          height: 'inherit'
        };
        const googleSigninBtnIconStyling = {
          backgroundColor: '#fff',
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '15px',
          borderRadius: '2px',
          height: '15px',
          margin: '0 8px 0 1px',
          padding: '17px',
          width: '15px'
        };

        return (
          <li>
            <a href="/auth/google" className="btn blue light-1" style={googleSigninBtnStyling}>
              <div style={flexWrapperStyling}>
                <i style={googleSigninBtnIconStyling}></i>
                Login with Google
              </div>
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
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo"
          >
            Emaily     
          </Link>
          <ul className="right">
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