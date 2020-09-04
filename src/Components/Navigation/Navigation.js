import React from 'react';

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <p className="navbar-brand">ONLINE COURSES</p>
                    <div className="navbar-nav ml-auto">
                        <p className="nav-item nav-link active">Courses Added: {props.courseCount}</p>
                        <p className="nav-item nav-link active">Total Price: {props.totalPrice.toFixed(2)}</p>
                    </div>
            </nav>
        </div>
    );
};

export default Navigation;