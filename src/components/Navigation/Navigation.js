import React from 'react';

const Navigation = ({isSignedIn, onRouteChange}) => {
    if(isSignedIn === true){
    return (
        <nav style={{display:"flex", justifyContent:"center"}} >
            <p className="underline black f3 dim ma0 pa5 pointer" onClick={()=>onRouteChange("SignOut")} >Sign Out</p>
        </nav>
         )
    }
    else{
        return (
            <nav style={{display:"flex", justifyContent:"center"}} >
                <p className="underline black f3 dim mb6 pa2 pointer" onClick={()=>onRouteChange("SignIn")}>Sign In</p>
                <p className="underline black f3 dim mb6 pa2 pointer" onClick={()=>onRouteChange("Register")}>Register</p>
            </nav> 
        )
    }

}

export default Navigation;
