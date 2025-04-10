import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const resposta = await axios.get("https://desafio-livros-api.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(() => {
        getLivros()
    }, [])

    return(
        <main>
            <section className={s.LivrosDoadosSection}>
                <h2>Livros Doados</h2>
                <section className={s.conteinerCard}>
                {livros.map((item) => (
                    <section>
                        <div>
                            <img src={item.image_url} alt={item.titulo} />
                            <h3>{item.titulo}</h3>
                        </div>
                    </section>
                ))}
                </section>
            </section>
        </main>
    )
}