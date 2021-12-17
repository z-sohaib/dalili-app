import React from 'react'

const ActivityCard = ({bgimage, message}) => {
    return (
        <div className={`${bgimage} rounded-md flex justify-center items-end text-white w-44 h-44 bg-cover pb-4 relative`}>
            <div className="absolute w-full h-20 bottom-0 bottomb"></div>
            <div className="absolute">{message}</div>
            
        </div>
    )
}

export default ActivityCard
