import React from 'react'
import Start from '@/components/sections/start'
import DeliveryImage from '@/assets/img/delivery.png'
const DeliveryPage = () => {
    return (
        <Start
            greeting='¡FELICIDADES!'
            title='LA FECHA DE ENTREGA DE TU UNIDAD ES UN MOMENTO MUY ESPERADO'
            subtitle='A SUMA DE 53 AÑOS DE EXCELENCIA Y REPUTACIÓN A TU FAVOR'
            content='Credibilidad, prestigio y seguridad de inversión para tu beneficio como comprador élite de este proyecto de lujo Porque desde ahora estás en las manos de dos pilares de la industria inmobiliaria.'
            href='/prices'
            image={{
                src: DeliveryImage.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "right"
            }}

        />
    )
}

export default DeliveryPage