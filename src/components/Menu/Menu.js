
import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {


	render() {
		return (
				<div>
				<ul className="menu">
				  <li><a href="#">My depths</a></li>
				  <li><a href="#news">Other depths</a></li>
				  <li><a href="#contact">Add depth</a></li>
				  <li><a href="#about">Profile</a></li>
				</ul>
					
				</div>
			)
	}
}

