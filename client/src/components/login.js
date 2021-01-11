import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '512945725777-dh6tolqdqb61pbjbsb4fa0imhvkfi1pf.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px',
            backgroundColor: 'blue' }}
              isSignedIn={true}
              />
        </div>
    );
}

export default Login;