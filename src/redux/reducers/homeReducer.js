const INITIAL_STATE = {
  aboutMe: true,
  aboutPortfolio: true
}

function homeReducer (state = INITIAL_STATE, action) {
  switch (action) {
    case 'ABOUT_ME':
      return {
        ...state,
        aboutMe: !state.aboutMe
      }
    case 'ABOUT_PORTFOLIO':
      return {
        ...state,
        aboutPortfolio: !state.aboutPortfolio
      }
    default:
      return state
  }
}

export default homeReducer
