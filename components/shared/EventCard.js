import React from 'react'

const EventCard = ({bgimage, message, time}) => {
    return (
        <div className={`${bgimage} rounded-md flex flex-col justify-end items-center text-white w-44 h-44 bg-cover`}>
            {message}
            <div className='ContainerG px-8 rounded-t-lg'>{time}</div>
        </div>
    )
}

export default EventCard
