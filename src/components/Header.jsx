import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Header.css'

function Header () {
  return (
    <header id="header">
      <p id="header-title">Mendri-Repo</p>
      <nav id="header-nav">
        <Link className="header-li" to="/">Início</Link>
        <Link className="header-li" to="/contacts">Contatos</Link>
        <Link className="header-li" to="/projects">Projetos</Link>
      </nav>
    </header>
  )
}

export default Header
