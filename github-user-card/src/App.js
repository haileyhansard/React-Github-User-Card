import React from 'react';
import './App.css';
import User from './components/User';
import axios from 'axios';
import FollowersList from './components/FollowersList';

class App extends React.Component {
  state = {
    user: "",
    following: [],
  };

    componentDidMount() {
      axios
      .get("https://api.github.com/users/haileyhansard")
      .then(res => {
        console.log("Response", res)
        this.setState({
          ...this.state, user: res.data
        })
      })
      .catch(err => {
        console.log("Something went wrong", err)
      }, []);

      axios
      .get("https://api.github.com/users/haileyhansard/following")
      .then(res => {
        console.log("Following response", res)
        this.setState({...this.state, following: res.data})
      })
    }
 

  render(){
    console.log("Render is Rendering");
    
    if (this.state.user.length === 0) {
      return <p>Loading data...</p>;
    }

    return (
      <div className="App">
        <h1>GitHub User Information</h1>
        <h3>My Profile:</h3>
        <User data={this.state.user}/>
        <h3>Followers:</h3>
        <div>
          <FollowersList following={this.state.following} />
        </div>
      </div>
    );    
  }

}

export default App;
