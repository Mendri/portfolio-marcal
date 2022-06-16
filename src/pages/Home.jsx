import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { aboutPortfolio, aboutMe } from '../redux/actions'
import Header from '../components/Header'
import '../css/Home.css'

class Home extends React.Component {
  render () {
    const { aboutMeState, aboutPortfolioState, aboutMeDispatch, aboutPortfolioDispatch } = this.props
    return (
      <div id='home'>
        <Header />
        <div id='abouts'>
          <div id='about-me'>
            <h2
              id='aboutMe-title'
              onMouseEnter={ () => aboutMeDispatch() }
              onMouseLeave={ () => aboutMeDispatch() }
            >
              Quer saber um pouco sobre mim?
            </h2>
            {
              aboutMeState &&
              (
                <div id='aboutMe-container'>Sou gostoso</div>
              )
            }
          </div>
          <div id='about-portfolio'>
            <h2
            id='aboutPortfolio-title'
              onMouseEnter={ () => aboutPortfolioDispatch() }
              onMouseLeave={ () => aboutPortfolioDispatch() }
            >
              Quer saber um pouco sobre esse Portfólio?
            </h2>
            {
              aboutPortfolioState &&
              (
                <div id='aboutPortfolio-container'>Esse Portfólio também é gostoso</div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
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
