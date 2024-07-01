import React, { useEffect, useState } from 'react'

const ManageUser = () => {
    const [userList, setuserList] = useState([])

    const fetchUserData = async () => {
        const res = await fetch( 'http://localhost:5000/user/getall' );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setuserList(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const displayUserData = () => {
        return <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map( (user) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className='btn btn-primary'>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    }
    

    return (
        <div>
            <h1 className='text-center fw-bold'> Manage User Data</h1>
            <hr />
            <div className='container'>
                    {displayUserData()}
            </div>
        </div>
    )
}

export default ManageUser;