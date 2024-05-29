import React , {useContext} from 'react'
import UserContex from './UserContex'
function Profile() {
    const {data} = useContext(UserContex);
    if(!data) return <div>Please login</div>
    return (
    <div>hello {data.username}</div>
  )
}

export default Profile