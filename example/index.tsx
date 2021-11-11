import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ButtonPegasus } from '../src/Components'

const App = () => {
  return (
    <div>
      <ButtonPegasus
        gradientColor="red"
        // variant="contained"
        testID="button-coba"
      >
        Test
      </ButtonPegasus>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
