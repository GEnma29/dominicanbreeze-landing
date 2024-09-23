
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
    { value: 'from 70,000 to 100,000 USD', label: 'De 70,000 a 100,000 USD' },
    { value: 'from 100,000 to 120,000 USD', label: 'De 100,000 a 120,000 USD' },
    { value: 'from 120,000 to 150,000 USD', label: 'De 120,000 a 150,000 USD' },
    { value: 'from 150,000 to 200,000 USD', label: 'De 150,000 a 200,000 USD' },
    { value: 'none', label: 'Ninguna de las anteriores' },

]


const Prices = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">
                TÚ SELECCIONAS EL PRECIO A TU MEJOR CONVENIENCIA

            </h1>
            <h3 className="mt-3 text-center text-2xl font-semibold leading-6 text-emerald-900">Los precios comienzan en 559,000 USD en unidades de 1 nivel y 595,000 USD en las de 2 niveles. Ambos casos con terraza y piscina privada. ¿Cuál de las anteriores se ajusta a lo que estás buscando?

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
                                <DialogTitle>Seleccione el presupuesto de tu proyecto</DialogTitle>
                                <DialogDescription>
                                    Seleccione el presupuesto de tu proyecto
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-5">
                                    {Options.map((option) => {
                                        return (
                                            <Link
                                                href={option.value === 'none' ? '/error' : '/appointment'}
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


export default Prices