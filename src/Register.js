import React, { Component } from 'react'
import './styles/App.css'
import './styles/Register.css'

export default class Register extends Component {

	handleClick(e) {
		e.preventDefault()

		console.log(this.props.page)
	}

	render() {
		return (
			<div>
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
					<form onSubmit={this.handleClick.bind(this)} className="contact-form">
						<div className="contact-item">
							<label for="name">Full name:</label>
							<input type="text" />
						</div>
							<div className="contact-item">
							<label for="email">Email:</label>
							<input type="text" />
						</div>
						<div className="contact-item">
							<label for="phone">Phone:</label>
							<input type="text"  />
						</div>
						<div className="contact-item">
							<label for="address">Password:</label>
							<input type="text" />
						</div>
						<div className="contact-item">
							<label for="address"></label>
							<input type="submit" value="Register"/>
						</div>
						<em>
							<p className="already">
								Already have an account? Click here to login.
							</p>
						</em>
					</form>
				</div>
			</div>

			)
	}
}


// logo: https://thumbs.dreamstime.com/t/group-parrots-isolated-white-44429802.jpg