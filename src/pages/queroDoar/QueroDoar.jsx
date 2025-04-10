import iconeLivro from '../../assets/iconeLivros.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from "axios"


export default function QueroDoar() {

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url, setImage_Url] = useState("")

    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImage_Url(e.target.value)
    }

    const enviarDados = async()=>{
        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
       await axios.post("https://desafio-final-2-0.onrender.com/doar",dadosAEnviar)
        alert("Obrigado, seu livro foi cadastrado com sucessso!")
    }


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