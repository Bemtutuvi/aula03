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

const orderAZ= ()=>{
    const ListaAux=[...produtos].sort((a,z)=> a.title.localeCompare(z.title));
    setProdutos(ListaAux)
}
const orderZA= ()=>{
    const ListaAux=[...produtos].sort((a,b)=> b.title.localeCompare(a.title));
    setProdutos(ListaAux)
}
const orderPrecoMaior= ()=>{
    const ListaAux=[...produtos].sort((menor,maior)=> maior.price-(menor.price));
    setProdutos(ListaAux)
}
const orderPrecoMenor= ()=>{
    const ListaAux=[...produtos].sort((maior,menor)=> menor.price-(maior.price));
    setProdutos(ListaAux)
}

return(
    <>
    <button onClick={()=>orderAZ()}>A à Z</button>
    <button onClick={()=>orderZA()}>Z à A</button>
    <button onClick={()=>orderPrecoMaior()}>Maior Preço</button>
    <button onClick={()=>orderPrecoMenor}>Menor Preço</button>
    <ListaProdutos produtos={produtos}/>
    </>
);
}