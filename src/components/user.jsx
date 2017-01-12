import React, { Component } from 'react';
import { Link } from 'react-router';

class User extends Component {
    render(){
        // Get data from route props
        const users = this.props.route.data;
        // Map through users and return linked users
        const userNode = users.map((user) => {
            return (
                <Link
                    to={"/users/"+user.id}
                    className="list-group-item"
                    key={user.id}>
                    {user.firstname}
                </Link>
            )
        });
        return (
            <div>
                <h1>Users page</h1>
                <div className="list-group">
                    {userNode}
                </div>
            </div>
        );
    }
}

export default User
