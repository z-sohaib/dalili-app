import React , {useState} from 'react';

const selectionCase = (props) => {
    const [clicked , setClicked] = useState(false) ; 
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return (
        <div className={`cursor-pointer chackBox grid grid-cols-12 w-fit px-3 py-1 text-xl gap-1 text-center rounded-md mx-auto ${clicked?'bg-green-800 text-white':'bg-transparent text-black'}`} onClick={handleClick}>
            <div className="col col-span-3">+</div><div className="col col-span-8">{props.choice}</div>
        </div>
    );
};

export default selectionCase;