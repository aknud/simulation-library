import React, { Component } from 'react';
import book from './../../assets/maroon-logo.svg';

class Auth extends Component {
	render() {
		return (
			<div className="av-main">
				<div className="av-tan" >
					<img className="av-book" src={book} alt="book"/>
					<h1>Book Exchange</h1>
					<div className="av-black" >
						<div className="login-username" >
                            <p>Username</p>
							<input type="text" />
						</div>
						<div className="login-password" >
                            <p>Password</p>
							<input type="password" />
						</div>
                        <button className="btn" >Register</button>
                        <button className="btn" >login</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Auth;
