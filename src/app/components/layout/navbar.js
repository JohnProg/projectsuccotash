import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { logoutUserAndRedirect } from '../../actions/auth';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    

logout = () => {
    this.props.dispatch(logoutUserAndRedirect());
};

 render() {  
    return (
        <div className="main-navbar">
            <ul className="navbar-super-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/lessons">Lessons</Link></li>
                <li><Link to="/lesson">Lesson</Link></li>
                {this.props.isAuthenticated ? 
                <div>
                    <li><Link to="/newcourse">Create Course</Link></li>
                    <li><Link to="/newlesson">Create Lesson</Link></li>
                </div>
                : '' }
            </ul>
                {this.props.isAuthenticated ?
                    <div className="navbar-actions auth">
                        <button onClick={this.logout}>
                            Logout
                        </button>
                    </div>
                                :
                <div className="navbar-actions unauth">
                    <ul>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
                }
        </div>
    )
 }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(Navbar);
