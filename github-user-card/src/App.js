import React from 'react';
import './App.css';
import User from './components/User';
import axios from 'axios';

class App extends React.Component {
  state = {
    user: "",
    followers: [],
  };

    componentDidMount() {
      axios
      .get("https://api.github.com/users/haileyhansard")
      .then(res => {
        console.log("Response", res)
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log("Something went wrong", err)
      }, []);
    }
 

  render(){
    console.log("Render is Rendering");
    
    if (this.state.user.length === 0) {
      return <p>Loading data...</p>;
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <User data={this.state.user}/>
      </div>
    );    
  }

}

export default App;
