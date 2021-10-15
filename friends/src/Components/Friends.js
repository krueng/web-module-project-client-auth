import React from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
import Loader from 'react-loader-spinner'

class Friends extends React.Component {
    state = {
        friends: [],
        loading: true
    };
    componentDidMount() {

        axiosWithAuth()
            .get('/friends')
            .then(resp => {
                this.setState({
                    loading: false,
                    friends: resp.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        return (
            <>
                {this.state.loading && (
                    <div className="key spinner">
                        <Loader type="Circles" color="#333777" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}
                {this.state.friends.map(friend => (<p key={friend.id}>{friend.name}</p>))}

            </>
        )
    }

}

export default Friends;