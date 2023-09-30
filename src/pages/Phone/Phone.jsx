import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Phone = () => {

    const id =useParams()
    console.log(id);
    const phones =useLoaderData()
    console.log(phones);

    useEffect(()=>{
const findPhone =phones?.find(phone =>phone.id === id)
console.log(findPhone);
    },[id,phones])





    return (
        <div>
            
        </div>
    );
};

export default Phone;