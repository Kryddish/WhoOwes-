/*global FB*/
import React, { Component } from 'react'
import './App.css'
import Register from '../Register/Register'
import Login from '../Login/Login'
import AddingDepth from '../AddingDepth/AddingDepth'
export default class App extends Component {

	constructor() {
		super()

		this.state = {
			page: 'register',
			loggedIn: false,
			FB: null,
			loggedIn: null
		}
	}

	componentWillMount() {
		
		// Facebook SDK
		this.connectFBSDK(document, 'script', 'facebook-jssdk')

		window.fbAsyncInit = () => {
			this.setState({ FB })

			FB.init({
				appId            : '219055638605221',
				autoLogAppEvents : true,
				xfbml            : true,
				version          : 'v2.9'
			})
			FB.AppEvents.logPageView()
			FB.getLoginStatus(response => {
				if (response.status === 'connected') {
					console.log('Logged in.')
					this.setState({ loggedIn: true, page: 'login' })
				}
				else
					this.setState({ loggedIn: false })
			})
		}
	}

	connectFBSDK(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0]
		if (d.getElementById(id)) {return}
		js = d.createElement(s); js.id = id
		js.src = "//connect.facebook.net/en_US/sdk.js"
		fjs.parentNode.insertBefore(js, fjs)
	}

	setPage(page) {
		this.setState({ page })
	}

	render() {
		return (
			<div className="App">
				{this.state.page === 'register' && this.state.loggedIn === false ?
				<div>
					<Register FB={this.state.FB} setPage = {this.setPage.bind(this)} />
				</div> : ''}
			{this.state.page === 'login' ?
				<div>
					<Login />
				</div> : ''}
			</div>
		)
	}
}
