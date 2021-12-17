import React from 'react'

const ActivityCard = ({bgimage, message}) => {
    return (
        <div className={`${bgimage} rounded-md flex justify-center items-end text-white w-44 h-44 bg-cover pb-4`}>
            {message}
        </div>
    )
}

export default ActivityCard
