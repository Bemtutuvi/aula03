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
        } catch(error){
            alert("A conexão do API está incorreta");
        }
        }
    receberListaProdutos();
},[]);
if(produtos.lenght===0){
    return<h1>Carregando...</h1>
}

const orderAZ= ()=>{
    const ListaAux=[...produtos].sort((a,b)=> a.title.localeCompare(b.title));
    setProdutos(ListaAux);
}
const orderZA= ()=>{
    const ListaAux=[...produtos].sort((a,b)=> b.title.localeCompare(a.title));
    setProdutos(ListaAux);
}
const orderPrecoMaior= ()=>{
    const ListaAux=[...produtos].sort((a,b)=> a.price.localeCompare(b.price));
    setProdutos(ListaAux);
}
const orderPrecoMenor= ()=>{
    const ListaAux=[...produtos].sort((a,b)=> b.price.localeCompare(a.price));
    setProdutos(ListaAux);
}

return(
    <>
    <button onClick={()=>orderAZ}>A à Z</button>
    <button onClick={()=>orderZA}>Z à A</button>
    <button onClick={()=>orderPrecoMaior}>Maior Preço</button>
    <button onClick={()=>orderPrecoMenor}>Menor Preço</button>
    <ListaProdutos produtos={produtos}/>
            </>
);
}