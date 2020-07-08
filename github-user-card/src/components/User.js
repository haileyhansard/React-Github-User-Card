import React from 'react';

class User extends React.Component {

    render (){
        console.log(this.props.data)
   
        return (
            <div>
            <div className="user-card">
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.location}</p>
                <p>{this.props.data.bio}</p>
                <img src={this.props.data.avatar_url} />
            </div>
            </div>
        ); 
    }
};

export default User;