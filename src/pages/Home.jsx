import {useEffect, useState} from "react";

export default function Home(){

const [produto,setProdutos] = useState([]);

useEffect(()=>{
    const receberListaProdutos= async()=>{
        try{
            const resposta= await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setProdutos(dados);
        } catch(erro){
            //falta um console.error()
        }
        receberListaProdutos();
    }
    receberListaProdutos();
},[]);

return(
    <>
    <h1>Lista de Produtos</h1>
    <ul>
        {produtos.map(produto=>(
            <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.descreption}</p>
                <p>Preço: R${produto.price}</p>
                <img src={produto.image} alt={produto.title} width={100}/>
            </li>))}
            </ul>
            </>
);
}