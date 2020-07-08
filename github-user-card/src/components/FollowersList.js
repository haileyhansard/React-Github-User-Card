import React from 'react';
import Follower from './Follower';

class FollowersList extends React.Component {
    render() {
        return (
            <>
            {this.props.following.map(following => 
            <Follower key={following.id} data={following} />)}
            </>
        );
    }
}

export default FollowersList;