import React from 'react'
import StartSection from '@/components/sections/start'
import Sinergy from '@/assets/img/sinergy-2.jpg'
const SinergyPage = () => {
    return (
        <StartSection
            title='¿QUÉ TENDRÁS A TU FAVOR CON ESTA SINERGÍA?'
            subtitle='A SUMA DE 53 AÑOS DE EXCELENCIA Y REPUTACIÓN A TU FAVOR'
            content='Credibilidad, prestigio y seguridad de inversión para tu beneficio como comprador élite de este proyecto de lujo Porque desde ahora estás en las manos de dos pilares de la industria inmobiliaria.'
            question='¿Desas continuar?'
            href={'https://pages.wiseagent.com/pages/?id=BFB343EC-F5B7-4209-B01C-95709E8F6654'}
            image={{
                src: Sinergy.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "left"
            }}
        />
    )
}

export default SinergyPage