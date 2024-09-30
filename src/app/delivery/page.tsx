import React from 'react'
import Start from '@/components/sections/start'
import DeliveryImage from '@/assets/img/delivery.png'
const DeliveryPage = () => {
    return (
        <Start
            greeting=''
            title='LA FECHA DE ENTREGA DE TU UNIDAD ES UN MOMENTO MUY ESPERADO'
            subtitle=''
            content='A diferencia de otros desarrolladores, el nuestro, dentro de su plan de desarrollo, ya tiene unidades listas para entrega, haciendo de este proyecto único en su clase.'
            question='¿Deseas continuar?'
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