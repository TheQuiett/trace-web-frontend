import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Card({item, delRowEvent, incrementAgeEvent}) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p onClick={delRowEvent}>X</p>
            <p onClick={incrementAgeEvent}>+</p>
        </div>
    );
}

export default Card;