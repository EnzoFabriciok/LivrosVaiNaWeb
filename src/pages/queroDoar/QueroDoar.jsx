import iconeLivro from '../../assets/iconeLivros.png'
import s from './queroDoar.module.scss'
export default function QueroDoar() {
    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro" />
                    <p>Informações do Livro</p>
                </div>
                <input type="text" name="" placeholder='Titulo' />
                <input type="text" name="" placeholder='Categoria' />
                <input type="text" name="" placeholder='Altor' />
                <input type="text" name="" placeholder='Link da Imagem' />
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}