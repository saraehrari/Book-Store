import { useState } from "react"

export default function Card(){
const[increse,setIncrese] = useState(true);
const[decrese, setDecrese] = useState(true);
const[remove, setRemove] = useState();


    return(
        <div>
            <h1>Shopping Cart</h1>
             {Books.map((b) =>{
             {b.title}
             {b.id}
             {b.author}
             {b.price}
             {b.category}
             {b.image}
             {b.description}
            })}



           <button onClicke ={(()=>setIncrese(false) )}>Increse</button>
            {increse+1}

             <button onClicke ={(()=>setDecrese(false) )}>Decrese</button>
            {decrese-1}



        </div>
    )
}