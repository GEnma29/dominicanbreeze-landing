import React from 'react'
import StartSection from '@/components/sections/start'
import Sinergy from '@/assets/img/sinergy-2.jpg'
const SinergyPage = () => {
    return (
        <StartSection
            title='¿QUÉ TENDRÁS A TU FAVOR CON ESTA SINERGÍA?'
            subtitle='LA SUMA DE 53 AÑOS DE EXCELENCIA Y REPUTACIÓN A TU FAVOR'
            content='Credibilidad, prestigio y seguridad de inversión para tu beneficio como comprador élite de este proyecto de lujo Porque desde ahora estás en las manos de dos pilares de la industria inmobiliaria.'
            question='¿Desas continuar?'
            href={'https://pages.wiseagent.com/pages/?id=13EEBF9C-54DA-41C5-83F5-EBFD3034D8B5'}
            image={{
                src: Sinergy.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "left"
            }}
        />
    )
}

export default SinergyPage