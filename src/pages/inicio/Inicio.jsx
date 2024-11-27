import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1Doar.png'
import imagem2 from '../../assets/imagem2Doar.png'
import imagem3 from '../../assets/imagem3Doar.png'
import imagem4 from '../../assets/imagem4Doar.png'
export default function Inicio() {
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                <section className={s.cards}>
                    <img src={imagem1} alt="Imagem ilustrando círculo social"/>
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>        
                </section>
                <section className={s.cards}>
                    <img src={imagem2} alt="imagem ilustrando pessoal lendo" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>        
                </section>
                <section className={s.cards}>
                    <img src={imagem3} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>        
                </section>
                <section className={s.cards}>
                    <img src={imagem4} alt="imagem ilustrando" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>        
                </section>
                </div>
            </section>
        </main>
    )
}