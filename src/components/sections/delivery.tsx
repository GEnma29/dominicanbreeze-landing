
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const Options = [
    { value: 'this year', label: 'Durante el año 2024' },
    { value: 'in 2025', label: 'Durante el año 2025' },
    { value: 'in 2026', label: 'Durante el año 2026' },
    { value: 'in 2027', label: 'Durante el año 2027' },
    { value: 'in another time', label: 'Ninguna de las anteriores' },
]


const Delivery = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">LA FECHA DE ENTREGA DE TU UNIDAD ES UN MOMENTO MUY ESPERADO
            </h1>
            <h3 className="mt-3 text-center text-2xl font-semibold leading-6 text-emerald-900">A diferencia de otros desarrolladores, el nuestro, dentro de su plan de desarrollo, ya tiene unidades listas para entrega, haciendo de este proyecto único en su clase.
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p className='flex font-semibold text-lg text-center mt-4'>
                    ¿Deseas continuar?

                </p>
            </div>
            <div className="flex  gap-4 justify-center items-center w-full mt-8">
                <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                    <Link href={'/'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                        Si
                    </Link>
                    <Dialog >
                        <DialogTrigger asChild>
                            <Button className="h-12  w-[135px]" variant="secondary">No</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Seleccione una fecha de entrega</DialogTitle>
                                <DialogDescription>
                                    Seleccione una fecha de entrega para tu proyecto
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-5">
                                    {Options.map((option) => {
                                        return (
                                            <Link
                                                href={option.value === 'in another time' ? '/error' : '/appointment'}
                                                key={option.value} className="relative border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start">
                                                <div className="flex h-6 items-center">
                                                    <Checkbox id="terms1" name="terms1" />
                                                    <div className="ml-3 text-sm leading-6">
                                                        <label
                                                            htmlFor="terms1"
                                                            className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {option.label}
                                                        </label>

                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}


export default Delivery