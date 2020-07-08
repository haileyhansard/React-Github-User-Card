import React from 'react';
import Follower from './Follower';

class FollowersList extends React.Component {
    render() {
        return (
            <>
            {this.props.followers.map(follower => 
            <Follower key={follower.id} data={follower} />)}
            </>
        );
    }
}

export default FollowersList;