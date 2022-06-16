const INITIAL_STATE = {
  aboutMe: false,
  aboutPortfolio: false
}

function homeReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
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
