import App from './App'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: 'ADD' }),
    sub: () => dispatch({ type: 'SUB' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
