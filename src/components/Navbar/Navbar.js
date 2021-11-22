import React from 'react';

const Navbar = ({cars, getInfo}) => {
    console.log('func',getInfo)
    return (
        <div>
            {
                cars.map((item)=> (
                    <strong onClick={()=> getInfo(item)} key={item.id} style={{margin: '10px', cursor: 'pointer'}}>{item.model}</strong>
                ))
            }
        </div>
    );
};

export default Navbar;