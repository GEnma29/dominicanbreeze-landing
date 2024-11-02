import React from 'react'
import StartSection from '@/components/sections/start'
import Capacity from '@/assets/img/capacity.png'
const CapacityPage = () => {
    return (
        <StartSection
            title='TU CAPACIDAD ECONÓMICA ES EL MOTOR DE TU INVERSIÓN'
            subtitle='¿Cuentas con fondos reservados para realizar una inversión en la República Dominicana?'
            content=''
            href='/interest'
            primaryButtonText='Si'
            secondaryButtonText='No'
            image={{
                src: Capacity.src,
                alt: "Imagen de bienvenida de Dominican Breeze International Realty",
                position: "left"
            }}
        />
    )
}

export default CapacityPage