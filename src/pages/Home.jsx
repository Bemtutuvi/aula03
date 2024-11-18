import {useEffect, useState} from "react";
import ListaProdutos from "../components/ListaProdutos";
export default function App(){
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
if(ListaProdutos.lenght===0){
    return<h1>Carregando...</h1>
}

const orderAZ= ()=>{
    const ListaAux=[...Lista].filter((a,b)=> a.title.localeCompare(b.title));
    setLista(ListaAux);
}

return(
    <>
    <button onClick={()=>orderAZ}>AZ</button>
    <ListaProdutos produtos={produtos}/>
            </>
);
}