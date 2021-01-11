import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '512945725777-dh6tolqdqb61pbjbsb4fa0imhvkfi1pf.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };
 
    return (
        <div >
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;