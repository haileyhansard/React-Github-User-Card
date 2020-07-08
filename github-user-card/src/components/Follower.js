import React from 'react';

class Follower extends React.Component {
    render(){
        return (
            <div className="user-card">
                <h2>{this.props.data.login}</h2>
                <img src={this.props.data.avatar_url} alt={this.props.login} />
            </div>
        );
    }
}

export default Follower;