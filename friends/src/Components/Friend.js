import React from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
import Loader from 'react-loader-spinner'

class Friend extends React.Component {
    state = {
        friend:{},
        loading: true,
        errorMessage: ''
    };
    componentDidMount() {
        axiosWithAuth()
            .get(this.props.match.url)
            .then(resp => {
                this.setState({
                    loading: false,
                    friend: resp.data,
                    errorMessage: ''
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    friend: {},
                    errorMessage: `No friend with ID ${this.props.match.params.id}`
                })
            })
    }

    render() {
        if (this.state.errorMessage) {
            return <p>{this.state.errorMessage}</p>
        }
        return (
            <>
                {this.state.loading && (
                    <div className="key spinner">
                        <Loader type="Circles" color="#333777" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}
                {<p key={this.state.friend.id}>{this.state.friend.name}</p>}

            </>
        )
    }

}

export default Friend;