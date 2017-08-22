import React, { Component } from 'react'
import './App.css'
import Register from '../Register/Register'
import inlogged from '../inlogged/inlogged'
import LoginHOC from 'react-facebook-login-hoc'
// import AddingDepth from '../AddingDepth/AddingDepth'

const configureLoginProps = {
  scope: 'public_profile, email',
  xfbml: false,
  cookie: false,
  version: 2.6,
  language: 'en_US',
  appId: '219055638605221'
}

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			page: 'register',
			loggedIn: false
		}

		this.status = this.props.fb.status
	    this.login = this.props.fb.login
    	this.logout = this.props.fb.logout
	}

	checkLoginState() {
		this.status(this.getStatus.bind(this))
	}

	getStatus(response) {
		if (response.authResponse) {
			this.responseApi.call(this, response.authResponse)
		}
		console.log(response)
	}

	responseApi(res) {
		console.log('token:', res.accessToken)
		this.setState({ page: 'login', loggedIn: true })
	}

	loginFacebook() {
		this.login(this.getStatus.bind(this))
	}

	logoutFacebook() {
		this.logout()
		console.log('Logged out')
		this.setPage('register')
	}

	setPage(page) {
		this.setState({ page })
	}

	render() {
		return (
			<div className="App">

				{this.state.page === 'register' ?
				<div>
					{true ?
					<div>
						{/* <button className='fb-btn' onClick={ this.checkLoginState.bind(this) }>Get Facebook Login Status</button> */}
				        
				       
			        </div> : null}
					<Register setPage={this.setPage.bind(this)} loginFacebook={this.loginFacebook.bind(this)}  />
				</div> : ''}

				{this.state.page === 'login' ?
				<div>
					<inlogged logoutFacebook={this.logoutFacebook.bind(this)} />
				</div> : null}
			</div>
		)
	}
}

export default LoginHOC(configureLoginProps)(App);