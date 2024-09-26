import React from 'react'
import StartSection from '@/components/sections/start'
import Sinergy from '@/assets/img/sinergy.jpg'
const SinergyPage = () => {
    return (
        <StartSection
            title='¿QUÉ TENDRÁS A TU FAVOR CON ESTA SINERGÍA?'
            subtitle='A SUMA DE 53 AÑOS DE EXCELENCIA Y REPUTACIÓN A TU FAVOR'
            content='Credibilidad, prestigio y seguridad de inversión para tu beneficio como comprador élite de este proyecto de lujo Porque desde ahora estás en las manos de dos pilares de la industria inmobiliaria.'
            href={'https://pages.wiseagent.com/pages/?id=1930B3B6-1C55-4796-A885-29A6A7F0D5EF'}
            image={{
                src: Sinergy.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "left"
            }}
        />
    )
}

export default SinergyPage