import React, { Component } from 'react'
import './inlogged.css'
import Menu from '../Menu/Menu'
import Clock from './Clock/Clock'

export default class inlogged extends Component {

	render() {
		return (
			<div>
				<Menu logoutFacebook={this.props.logoutFacebook} />
				



			</div>
		)
	}
}


// logo: https://thumbs.dreamstime.com/t/group-parrots-isolated-white-44429802.jpg
// 	Visa Dina skulder samt vad andra är skyldiga 
// 	Lägga till och ta bort skulder 
//	Profil med info namn 
// 	Lista med kontakter/kunna lägga till vänner med mobilnr
//	Kunna skicka påminelser
//	Kunna få påminseler
// 	Se en kalender med skulder när de går ut osv 