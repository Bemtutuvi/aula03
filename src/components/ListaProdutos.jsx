import styles from '../styles/listaProdutos.module.css'
export default function ListaProdutos({ produtos }){
    return(
        <>
    <h1>Lista de Produtos</h1>
    <ul className={styles.blocoLista}>
        <div className={styles.card}>
        {produtos.map(produto=>(
            <li key={produto.id}>
                <h2>{produto.title}</h2>                
                <img src={produto.image} alt={produto.title} width={100}/>
                <p>Preço: R${produto.price}</p>
                <p>{produto.descreption}</p>
            </li>))}
            </div>
            </ul>
                </>
        )
}