import React from 'react'

const News = ({img,title,time}) => {
    return (
        <div>
            <p>{img}</p>
            <h3>{title}</h3>
            <p>{time}</p>
        </div>
    )
}

export default News
