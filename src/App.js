import React, { Component } from 'react'
import './styles/App.css'
import Register from './Register'

export default class App extends Component {

	constructor() {
		super()

		this.state = {
			page: 'register'
		}
	}

	render() {
		return (

			<div className="App">
				{this.state.page === 'register' ?
				<div>
					<Register page={this.state.page} />
				</div> : ''}
			</div>
			)
	}
}