import {useEffect, useState} from "react";
import ListaProdutos from "../components/ListaProdutos";

export default function Home(){

const [produtos, setProdutos] = useState([]);

useEffect(()=>{
    const receberListaProdutos= async()=>{
        try{
            const resposta= await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setProdutos(dados);
        } catch(erro){
            console.error(erro)
        }
    }
    receberListaProdutos();
},[]);

return(
    <>
    <ListaProdutos produtos={produtos}/>
            </>
);
}