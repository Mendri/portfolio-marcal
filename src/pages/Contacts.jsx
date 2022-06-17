import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import '../css/Contacts.css'

function Contacts () {
  return (
    <div id='contact'>
      <Header />
      <div id='contacts-container'>
        <h2 id='contact-title'>Minhas redes de contato:</h2>
        <div id='envelope-container'>
          <p id='envelope-paragraph'>
            Email principal:
            marcalmendrighi@gmail.com
          </p>
          <FontAwesomeIcon id='envelope-icon' icon={faEnvelope} />
        </div>
        <div id='linkedin-container'>
          <a href='https://www.linkedin.com/in/mendrighi/'>
            <FontAwesomeIcon id='linkedin-icon' icon={faLinkedin} />
          </a>
          <a href='https://www.linkedin.com/in/mendrighi/' id='linkedin-paragraph'>
            Caso queira uma abordagem mais profissional, este é meu Linkedin
          </a>
        </div>
        <div id='github-container'>
          <a id='github-paragraph' href='https://github.com/Mendri'>
            Se quiser acompanhar os projetos que eu já participei, este é meu GitHub
          </a>
          <a href='https://github.com/Mendri'>
            <FontAwesomeIcon id='github-icon' icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts
