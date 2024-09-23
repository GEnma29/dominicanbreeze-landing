import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import Link from "next/link"

const perks = [
    {
        name: 'Experencia',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
        description:
            "20 años de experiencia en construcción de viviendas de lujo",
    },
    {
        name: 'Trayactoria',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
        description:
            "Desarrollador y dueño del primer centro comercial de Punta Cana donde albergan prestigiosas marcas tales como Caribbean Cinemas, IKEA, Psycho Bunny y otras",
    },
    {
        name: 'Reputacion',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description:
            'Reputación intachable en puntualidad en fechas de entrega',
    },
    {
        name: 'Calidad',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "Entrega de unidades con los acabados de la más alta calidad",
    },
    {
        name: 'Confianza',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "Un nombre de confianza para compradores locales e internacionales",
    },
]


export default function InsectiveSeption() {
    return (
        <div className="bg-gray-50">
            <h2 className="sr-only">El Desarrollador más completo en la República Dominicana</h2>
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {perks.map((perk) => (
                        <div key={perk.name} className="sm:flex">
                            {/* <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img alt="" src={perk.imageSrc} className="h-24 w-28" />
                                </div>
                            </div> */}
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <h3 className="text-2xl font-medium text-gray-900">{perk.name}</h3>
                                <p className="text-lg mt-2 text-sm text-gray-500">{perk.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='flex flex-col justify-center items-center '>
                        <p className='flex mt-2 text-center'>
                            Estas cualidades hacen de tu desarrollador una empresa confiable basada en hechos.
                        </p>
                        <p>
                            Seguramente ya quieres saber quién es.
                        </p>
                    </div>
                </div>
                <div className='flex mt-4 flex-col justify-center items-center '>
                    <h2 className='flex lg:text-2xl font-semibold'>Deseas continuar?</h2>
                    <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                        <Link href='/owner' className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                            Si
                        </Link>
                        <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'h-12  w-[135px]')}  >
                            No
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
