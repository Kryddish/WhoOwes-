
import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {


	render() {
		return (
				<div>
				<img src="https://tmpfilecdn.freelogodesign.org/24fe683c-f8a1-4dda-a3b8-aa8693e13cdc.png" />
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