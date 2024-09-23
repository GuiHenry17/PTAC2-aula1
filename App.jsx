import { useEffect, useState } from "react";

export default function App(){
    const [produtos, setProdutos] = useState([]);
    useEffect(
        ()=>{
            const buscarProdutos = async()=>{
                const resposta = await fetch('www.youtube.com')
                const dados = await resposta.json();
                setProdutos(dados);
            }
            buscarProdutos();
        },[])
    return(
        <main>
              {produtos.map((produto)=>{
                <div key={produto.id}>
                <p>{produto.title}</p>
                </div>
             })}
        </main>
    )
}