import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {

    renderContent(){
        console.log(this.props.auth);
        switch(this.props.auth){
        case undefined:
            return "start11111";
        case false:
            return "false";

        default:
            return "data came";
        }
    }

    render(){
        //console.log(this.props);
        return (
            <div className="container">
            <nav>
             
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sports</a></li>
                <li><a href="badges.html">Programming Languages</a></li>
                <li><a href="collapsible.html">Entertainment</a></li>
                {this.renderContent()}
              </ul>
            </div>
          </nav>
          </div>
        );
    }


}

function mapStateToProps({ auth }){
    return { auth };
}
export default connect(mapStateToProps) (Header);