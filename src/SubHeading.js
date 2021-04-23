import React from 'react'

const SubHeading = ({title,description,time}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{time}</p>
        </div>
    )
}

export default SubHeading
