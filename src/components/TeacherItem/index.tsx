import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default function TeacherItem() {
    return (
                <article className="teacher-item">

                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/12739211?s=460&u=d39f83320d25bc729df6ab76103bf780e90551be&v=4" alt="Nome"/>
                        <div>
                            <strong>
                                Jefferson Silva
                            </strong>
                            <span>Informática</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias em Informática.
                        <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores harum eius eligendi odit laudantium, veniam sunt id facilis ab illo, aliquam saepe rem totam odio aspernatur corporis. A, accusamus.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}