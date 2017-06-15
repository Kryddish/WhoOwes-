
import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {


	render() {
		return (
				<div>
				<img src="https://tmpfilecdn.freelogodesign.org/24fe683c-f8a1-4dda-a3b8-aa8693e13cdc.png" />
				<ul className="menu">
				  <li><a class="active" href="#home">Home</a></li>
				  <li><a href="#news">News</a></li>
				  <li><a href="#contact">Contact</a></li>
				  <li><a href="#about">About</a></li>
				</ul>
					
				</div>
			)
	}
}