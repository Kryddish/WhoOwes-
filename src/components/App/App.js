import React, { Component } from 'react'
import './App.css'
import Register from '../Register/Register'
import Login from '../Login/Login'
export default class App extends Component {

	constructor() {
		super()

		this.state = {
			page: 'register'
		}
	}

	setPage(page) {
		this.setState({ page })
	}

	render() {
		return (

			<div className="App">
				{this.state.page === 'register' ?
				<div>
					<Register setPage = {this.setPage.bind(this)} />
				</div> : ''}
			{this.state.page === 'login' ?
				<div>
					<Login />
				</div> : ''}
			</div>
			)
	}
}
