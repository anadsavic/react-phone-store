import React from 'react';
import  '../App.css';
function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-title">
                <h1 className="text-centralize font-weight-bold text-center">
                    {name}
                    <strong className="text-blue"> {title}</strong>
                </h1>
            </div>
        </div>
    );
}

export default Title;