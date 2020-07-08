import React from 'react';

class User extends React.Component {

    render (){
        console.log(this.props.data)
   
        return (
            <div className="user-card">
                <h1>My Profile:</h1>
                <h2>{this.props.data.name}</h2>
                <h3>{this.props.data.location}</h3>
                <h3>{this.props.data.bio}</h3>
                <img src={this.props.data.avatar_url} />
            </div>
        ); 
    }
};

export default User;