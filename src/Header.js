import React, { Component } from 'react'
import './styles/App.css'
import './styles/Header.css'

class Header extends Component {

  render() {
    return (

    <div>
     	<div className="hero">
     	<p className="logo">Who owes?</p>
     	
	     <div className="intro">
	     	<em><p>Tired of remeber depths?<br />
			Let the app do it for you!</p></em>
		</div>

		<p className="register">Register with your phonenumer:</p>
	
    <form className="contact-form">
     
         <div className="contact-item">
          <label for="name">Full name:</label>
          <input type="text" />
        </div>

        <div className="contact-item">
          <label for="email">Email:</label>
          <input type="text" />
        </div>

        <div className="contact-item">
          <label for="phone">Phone:</label>
          <input type="text"  />
        </div>

        <div className="contact-item">
          <label for="address">Password:</label>
          <input type="text" />
        </div>
        <div className="contact-item">
          <label for="address"></label>
          <input type="submit" value="Register"/>
        </div>

        <em><p className="already">Already have an account? Click here to login.</p></em>

    </form>
    </div>
    </div>

    )
  }
}

export default Header

// logo: https://thumbs.dreamstime.com/t/group-parrots-isolated-white-44429802.jpg