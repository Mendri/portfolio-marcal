import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { aboutPortfolio, aboutMe } from '../redux/actions'
import Header from '../components/Header'

class Home extends React.Component {
  render () {
    const { aboutMeState, aboutPortfolioState, aboutMeDispatch, aboutPortfolioDispatch } = this.props
    return (
      <div>
        <Header />
        <div id='about-me'>
          <button type='button' onClick={ () => aboutMeDispatch() }>Quer saber um pouco sobre mim?</button>
          {
            aboutMeState &&
            (
              <div>Sou gostoso</div>
            )
          }
        </div>
        <div id='about-portfolio'>
        <button type='button' onClick={ () => aboutPortfolioDispatch() }>Quer saber um pouco sobre esse Portfólio?</button>
          {
            aboutPortfolioState &&
            (
              <div>Esse Portfólio também é gostoso</div>
            )
          }
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
