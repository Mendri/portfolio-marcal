import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { aboutPortfolio, aboutMe } from '../redux/actions'
import Header from '../components/Header'
import '../css/Home.css'

function Home (props) {
  const { aboutMeState, aboutPortfolioState, aboutMeDispatch, aboutPortfolioDispatch } = props
  return (
      <div id='home'>
        <Header />
        <div id='abouts'>
          <div id='about-me'>
            <div
              id='aboutMe-title'
              onMouseEnter={ () => aboutMeDispatch() }
              onMouseLeave={ () => aboutMeDispatch() }
            >
              <p>Quer saber um pouco sobre mim?</p>
              {
              aboutMeState &&
              (
                <div id='aboutMe-container'>
                  <p>Buenas!!! Meu nome é Marçal, tenho 19 anos, moro em São Carlos e o Mendri no título é
                  a junção dos sobrenomes de solteiro dos meus pais (Mendonça e Aldrighi).
                  </p>
                  <br />
                  <p>
                    Sou um estudante de desenvolvimento web pela trybe e já tenho conhecimento das seguintes tecnologias: HTML, CSS, JavaScript, React, Redux e Jest
                  </p>
                  <br />
                  <p>
                    Meu objetivo pessoal, pelo menos por enquanto é me tornar um programador competente
                  </p>
                </div>
              )
            }
            </div>
          </div>
          <div id='about-portfolio'>
            <div
            id='aboutPortfolio-title'
            onMouseEnter={ () => aboutPortfolioDispatch() }
            onMouseLeave={ () => aboutPortfolioDispatch() }
            >
              <p>Quer saber um pouco sobre esse Portfólio?</p>
            {
              aboutPortfolioState &&
              (
                <div id='aboutPortfolio-container'>
                  <p>
                    Pois bem, este portfólio obviamente foi feito para armazenar meus projetos pessoais, para que então eu pudesse reuní-los em um só lugar.
                  </p>
                  <br />
                  <p>
                    Mas ele também é especial, pois ele é o meu primeiro projeto pessoal com nenhum caráter acadêmico, já que decidi fazê-lo apenas como um treinamento
                  </p>
                  <br />
                  <p>
                    Pelo menos inicialmente haveram três caminhos neste projeto, este aqui que é home, feito para introduzir eu e este projeto a você. Há o caminho contatos que tem o propósito de apresentar as minha redes de comunicação e por fim e mais importante o caminho dos projetos, este contará com alguns projetos demonstrando as minhas habilidades em certas tecnologias.
                  </p>
                </div>
              )
            }
            </div>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  aboutMeState: state.homeReducer.aboutMe,
  aboutPortfolioState: state.homeReducer.aboutPortfolio
})

const mapDispatchToProps = (dispatch) => ({
  aboutMeDispatch: (state) => dispatch(aboutMe(state)),
  aboutPortfolioDispatch: (state) => dispatch(aboutPortfolio(state))
})

Home.propTypes = {
  aboutMeState: PropTypes.bool,
  aboutPortfolioState: PropTypes.bool,
  aboutMeDispatch: PropTypes.func,
  aboutPortfolioDispatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
