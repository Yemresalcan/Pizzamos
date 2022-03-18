import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div
        className='leftSide'style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className='rightSide'>
          <h1>İletişim Kur </h1>
          <form id="contact-form" method='POST'>
            <label htmlFor='name'>Full name </label>
            <input name='name' placeholder='Tam adınızı giriniz..' type={"text"}  />
            <label htmlFor='email'>Email </label>
            <input name='email' placeholder='Tam adınızı giriniz..' type={"text"}  />
            <label htmlFor='message'>Message </label>
            <textarea rows={6} placeholder="Mesajınızı Girniniz.. " name="message" required
            >


            </textarea>
          <button type='submit'> Mesaj Gönder </button>

          </form>

        </div>
        </div>

    
    
  )
}

export default Contact