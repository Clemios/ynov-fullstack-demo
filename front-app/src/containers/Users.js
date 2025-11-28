import { useEffect, useState } from "react";
import { axiosPrivateRequests } from "../helpers/request";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosPrivateRequests.get('/users').then((response) => {
            console.log(response);
            setUsers(response.data);
        }).catch((error) => {
            console.error('Error getting users:', error);
        });
    }, []);


    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.email}</h2>
                </div>
            ))}
        </div>
    );
};

export default Users;