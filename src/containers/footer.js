import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Inicio</Footer.Title>
                    <Footer.Link href="#">Inscripciones</Footer.Link>
                    <Footer.Link href="#">Galería</Footer.Link>
                    <Footer.Link href="#">Testimonios</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href="#">Misión</Footer.Link>
                    <Footer.Link href="#">Biblioteca</Footer.Link>
                    <Footer.Link href="#">Áreas</Footer.Link>
                    <Footer.Link href="#">Bienestar</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Info</Footer.Title>
                    <Footer.Link href="#">Sena.gov</Footer.Link>
                    <Footer.Link href="#">Preguntas FAQ</Footer.Link>
                    <Footer.Link href="#">Eventos</Footer.Link>
                    <Footer.Link href="#">Contacto</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}