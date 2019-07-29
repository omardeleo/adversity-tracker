import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      adversities : []
    }
  }
  componentDidMount() {
    // fetch("api/v1/adversities")
    //   .then((response) => {
    //     // console.log(response.json());
    //     return response.json()
    //   })
    //   .then(adversities => {
    //     this.setState({
    //       adversities: adversities
    //     })
    //   });
  }

  render() {
    // const adversitiesList = this.state.adversities.map((adversity, i) => {
    //   return <li key={i}>{adversity.title}</li>
    // })
    return (
      <div>
        <h1>Adversity Tracker</h1>
        Welcome, user!
      </div>
    )
  }
}

export default App;
