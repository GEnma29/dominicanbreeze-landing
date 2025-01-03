import React from 'react'
import StartSection from '@/components/sections/start'
import StartImage from '@/assets/img/project-place.png'
const Start = () => {
    return (
        <StartSection
            greeting='Bienvenido(a) a Dominican Breeze International Realty'
            title='Empresa de Bienes Raíces, Líder en Proyectos Nuevos en la República Dominicana'
            subtitle=''
            content='Te encuentras aquí porque deseas una presentación virtual privada con todos los detalles de este hermoso proyecto. Siempre valoramos tu tiempo y por eso te haremos unas valiosas preguntas con el propósito de cualificarte.'
            question='¿Estás de acuerdo?'
            href='/description'
            image={{
                src: StartImage.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "right"
            }}
        />

    )
}

export default Start