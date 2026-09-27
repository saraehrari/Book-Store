export default function Card(){
    return(
        <div>
            <h1>Shopping Cart</h1>
             {Books.map((b) =>{
             { b.title}
             { b.id}
             {b.author}
             {b.price}
             {b.category}
             {b.image}
             {b.description}
             



            })}
        </div>
    )
}