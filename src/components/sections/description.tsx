
import HOUSE_1 from '@/assets/img/E01-min.png'
import HOUSE_2 from '@/assets/img/E04-min.png'
import HOUSE_3 from '@/assets/img/Ext01-min.png'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const features = [
    {
        name: 'Unidades de 1 o 2 niveles',
        description: '',
    },
    { name: 'Villas de 3 dormitorios + dormitorio para la servidumbre', description: '' },
    {
        name: 'Todas las unidades incluyen aires inverters en todas las áreas, verjas, terraza y piscina privada',
        description: '',
    },
    { name: 'La más lujosa “Casa Club para el disfrute de sus residentes', description: "" },
    { name: 'Control de acceso con seguridad 24 horas', description: "" },
    { name: 'A 5 minutos de las playas de arena blanca y aguas turquesas; Bibijagua y Jellyfish', description: "" },
    { name: 'Acceso directo a comercios, restaurantes, tiendas, bancos, cines, gimnasios y otros', description: "" },


]



export default function Description() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <div className="border-b border-gray-200 pb-10">
                            <h2 className="font-medium text-gray-500">Con la ubicación más céntrica y segura de toda la región con unidades listas para entrega</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl">Un exclusivo proyecto de villas de lujo en “Downtown Punta Cana”.</p>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <p className='flex mt-2'></p>
                            <h2 className='flex lg:text-2xl font-semibold'>¿Quieres conocer más?</h2>
                            <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                                <Link href='/incentives' className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                                    Si
                                </Link>
                                <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'h-12  w-[135px]')}  >
                                    No
                                </Link>
                            </div>
                        </div>

                        <ul className="mt-10 space-y-5">
                            {features.map((feature) => (
                                <li key={feature.name}>
                                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                src={HOUSE_2.src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                    src={HOUSE_1.src}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                    src={HOUSE_3.src}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
