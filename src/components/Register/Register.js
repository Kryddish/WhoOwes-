import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {

	handleRegister(e) {
		e.preventDefault()
		this.props.setPage('login')
	}

	render() {
		return (
				<div className="hero">
					<p className="logo">Who owes?</p>
					<div className="intro">
						<em>
							<p>
								Tired of remember depths?<br />
								Let this app do it for you!
							</p>
						</em>
					</div>
					<p className="register">Register with your phonenumber:</p>
					<div className="contact-form">
						<div className="contact-item">
							<label htmlFor="name">Full name:</label>
							<input type="text" />
						</div>
						<div className="contact-item">
							<label htmlFor="phone">Phone:</label>
							<input type="text"  />
						</div>
						<div className="contact-item">
							<label htmlFor="address">Password:</label>
							<input type="text" />
						</div>
						<div className="contact-item">
							<label htmlFor="address"></label>
							<input onClick={this.handleRegister.bind(this)} type="button" value="Register"/>
						</div>
						<em>
							<p className="already">
								Already have an account? Click here to login.
								<button onClick={() => this.props.FB.login()}>Log in with facebook</button>
							</p>
						</em>
					</div>
				</div>
			)
	}
}


// logo: https://thumbs.dreamstime.com/t/group-parrots-isolated-white-44429802.jpg