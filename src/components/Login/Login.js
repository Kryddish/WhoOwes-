import React, { Component } from 'react'
import './login.css'
import Menu from '../Menu/Menu'

export default class Login extends Component {

	render() {
		return (
			<div>
				<Menu />
				<div className="section">
					<input className="add-btn" type="button"/> 
				</div>
				<div className="add-section">
					<form className="adding">
						<label>Amount of money:</label>
							<input type="text" />							
							<input type="radio" value="Borrowed"  />Borrowed <br />
							<input type="radio" value="Lend"  />Lend <br />
						//	Vem
						<label>Date:</label>
							<input type="date" />
						<label>Category:</label>
							<input type="date" />
						<label></label>
							// <input className="" type="button"/> 
							<input type="button" value="Add"/>
					</form>
				</div>

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