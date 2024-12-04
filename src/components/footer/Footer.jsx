import imagem1 from '../../assets/facebook-logo.png'
import imagem2 from '../../assets/twitter-logo.png'
import imagem3 from '../../assets/youtube-logo.png'
import imagem4 from '../../assets/linkedin-logo.png'
import imagem5 from '../../assets/instagram-logo.png'
import s from '../footer/footer.module.scss'
export default function Footer() {
    return(
        <footer>
            <section className={s.contatosFooter}>
            <p>4002-8922</p>
                <ul>
                    <li><a href="http://"><img src={imagem1} alt="Logo do facebook" /></a></li>
                    <li><a href="http://"><img src={imagem2} alt="Logo do twitter" /></a></li>
                    <li><a href="http://"><img src={imagem3} alt="Logo do youtube" /></a></li>
                    <li><a href="http://"><img src={imagem4} alt="Logo do linkedin" /></a></li>
                    <li><a href="http://"><img src={imagem5} alt="Logo do instagram" /></a></li>
                </ul>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}