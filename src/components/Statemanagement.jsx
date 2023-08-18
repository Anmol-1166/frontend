import React, { useState } from "react";

const Statemanagement = () => {
let count = 1;

const [like, setLike] = useState(1);
return (
    <div className="container">
    <h1>State Management</h1>
    <hr />
    <button
        className="btn btn-primary mt-3"
        onClick={() => {
        count++;
        console.log(count);
        }}
    >
        Add Count
    </button>
    <h1>{count}</h1>

        <button
        className="btn btn-success mt-5"
        onClick={() => setLike(like + 1)}
        >
        Update State
        </button>

        <h1>{like}</h1>
    </div>
    );
};

export default Statemanagement;
