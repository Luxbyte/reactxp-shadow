let React, RX ;
React = RX = require('reactxp');
import {Shadow} from 'reactxp-shadow'

const App = () => (
  <Shadow style={{
    width: 348,
    height: 470,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4
  }}>
    <RX.Text>Hello World!</RX.Text>
  </Shadow>
)

module.exports = App;