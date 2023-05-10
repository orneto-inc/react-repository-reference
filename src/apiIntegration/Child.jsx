// imoprt React form 'react';
import "./api.css";


const Child = ({ users }) => {
    console.log(users, "this is userssss");
    return (
        <div className="card-wrapper">
            {/* {users.users} */}

            {users.map((user) => {
                return (
                    <div className="card" key={user.id}>
                        <img src={user.avatar} className="card-img-top" alt="user-profile-pic" />
                        <div className="card-body">
                            <p className="id"><label>Id: </label>{user.id}</p>
                            <p className="name">{user.first_name} {user.last_name}</p>
                            <p className="address">
                                {user.address.street_address},
                                 {user.address.street_name},  
                                 {user.address.city}, 
                                 {user.address.state}-{(user.address.zip_code)}, 
                                 {user.address.country}
                            </p>
                            <p className="gender">{user.gender}</p>
                            <p className="phone">{user.phone_number}</p>
                            <p className="email">{user.email}</p>
                        </div>
                    </div>
                )
            })}

            {/* {users.map((user)=>{
                return(
                    <h1>{user.first_name}</h1>
                )
                
            })} */}
        </div>


    )
}
export default Child;