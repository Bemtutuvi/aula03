import styles from '../styles/listaProdutos.module.css'
export default function ListaProdutos({ produtos }){
    return(
        <>
        <div className={styles.cabecalho}>
            <h1>Roupas Marcelindo - Lindo</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    <h1>Lista de Produtos</h1>
    <ul className={styles.blocoLista}>
        {produtos.map(produto=>(
        <div key={produto.id} className={styles.card}>
                <h2>{produto.title}</h2>                
                <img src={produto.image} alt={produto.title} width={100}/>
                <p class="preco">Preço: R${produto.price}</p>
                <p>{produto.descreption}</p>
            </div>))}
            </ul>
                </>
        )
}