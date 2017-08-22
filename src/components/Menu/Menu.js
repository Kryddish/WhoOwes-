import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {

	render() {
		return (
				<div>
					<ul className="menu">
					  <li><button>My depths</button></li>
					  <li><button>Other depths</button></li>
					  <li><button>Add depth</button></li>
					  <li><button>Profile</button></li>
					</ul>
					 <button className='fb-btn' onClick={ () => this.props.logoutFacebook() }>Facebook Logout</button>
				</div>
			)
	}
}