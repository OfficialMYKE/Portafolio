import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contacto() {
  return (
     <div className="contact">
      <h2>Contacto</h2>
      <ul className="text-lg">
        <li><strong>Email:</strong> michaelcarrillo.ec@gmail.com</li>
        <li><strong>Teléfono:</strong> +593 987 266 650</li>
        <li><strong>Ubicación:</strong> Quito, Ecuador</li>
      </ul>
      
      <div className="social-links">
        <a href="https://www.instagram.com/official_myke/" target='black' className="social-link"><FaInstagram /></a>
        <a href="#" className="social-link"><FaTwitter /></a>
        <a href="#" className="social-link"><FaGithub /></a>
        <a href="#" className="social-link"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Contacto;
