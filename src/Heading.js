import React from 'react'
import Data from '../src/Data/Data.json';

const Heading = () => {

    return (


        <div>
            {Data.map((data)=>(
                
                   <div className="">
                       <div className="">{data.title}</div>
                        <p>{data.description}</p>
                        <p>{data.time}</p>
                   </div>                 
                
            ))}
               
                     
           
        </div>
    )
}

export default Heading;
