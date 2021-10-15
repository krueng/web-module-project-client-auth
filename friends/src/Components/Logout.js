import React, { useEffect } from "react";
import axiosWithAuth from './../Utils/axiosWithAuth';

const Logout = (props) => {

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                props.onLoggedOut();
                localStorage.removeItem("token");
                props.history.push('/login');
            }).catch(err => {
                console.log(err);
            })
        // eslint-disable-next-line        
    }, []);

    return (<div></div>);
}

export default Logout;