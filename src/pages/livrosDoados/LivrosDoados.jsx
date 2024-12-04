import livroProtagonista from '../../assets/livro-protagonista.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados() {
    return(
        <main>
            <section className={s.LivrosDoadosSection}>
                <h2>Livros Doados</h2>
                <section className={s.conteinerCard}>
                    <section>
                        <img src={livroProtagonista} alt="Imagem do livro o protagonista" />
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </section>
                </section>
            </section>
        </main>
    )
}