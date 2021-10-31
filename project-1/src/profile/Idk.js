import React from 'react';

const Idk = ({tab,age,func}) => {
    return (
        <div>

            {
                tab.map(e => (
                    <>
                    <p>{e}</p>
                    <p>{age}</p>
                    <button onClick={()=>{func(e)}} >click me</button>
                    </>
                ))
            }
        </div>
    );
}

export default Idk;