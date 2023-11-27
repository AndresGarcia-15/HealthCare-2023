import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
  
    const {user}= useAuth0();
    
    return(
        <div>
            <img className="rounded-full ml-9" src={user.picture}/>
            <h2 className="ml-10">{user.name}</h2>
        </div>
    );
}
export default Profile
