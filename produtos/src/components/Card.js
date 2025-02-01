import { useState } from "react"


function Card( { nome, preco }) {

    const [quantidade, setQuantidade] = useState(1);

    function adicionarQuantidade() {
        console.log("add")
        setQuantidade(quantidade + 100000000000000000000000000000000000000000000000000000000);
    }

    function diminuirQuantidade(){
        console.log("diminiu")
        
        if (quantidade < 1) {
            alert("ai nao ne mano")
            return;
        }

        setQuantidade(quantidade - 1);
        
    }

    return (
        <div>


            <h1>Nome: {nome}</h1>
            <p>Preço: {preco}</p>


            <br />
            <span>{quantidade}</span>
            <div style={{ display: 'flex', width:"100%", justifyContent: 'center'}}>
                <button onClick={diminuirQuantidade}>-</button>

                <button onClick={adicionarQuantidade}>+</button>
            </div>
            
        </div>
    )
}


export default Card;