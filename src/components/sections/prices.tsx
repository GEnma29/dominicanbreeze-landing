
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"



const Options = [
    { value: '100', label: '559,000 USD en unidades de 1 nivel' },
    { value: '50', label: '595,000 USD en unidades de 2 niveles' },
    { value: 'none', label: 'Ninguna de las anteriores' },
]

const Prices = () => {
    return (
        <div className="flex w-[90%] flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6 bg-gray-50 shadow-md"> {/* Added background and shadow */}
            <h2 className="text-center text-xl leading-10 lg:text-3xl font-semibold leading-6 text-emerald-900">
                TÚ SELECCIONAS EL PRECIO A TU MEJOR CONVENIENCIA
            </h2>
            <h3 className="mt-3 text-sm text-center lg:text-2xl font-semibold leading-6 text-emerald-900">
                Los precios comienzan en 559,000 USD en unidades de 1 nivel y 595,000 USD en las de 2 niveles. Ambos casos con terraza y piscina privada. ¿Cuál de las anteriores se ajusta a lo que estás buscando?
            </h3>

            <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
                <div className="space-y-5"> {/* Consider a heading for price ranges */}
                    <h4 className="text-center text-lg font-semibold leading-6 text-emerald-900">
                        Seleccione el presupuesto de tu proyecto
                    </h4>
                    {Options.map((option) => (
                        <Link
                            href={option.value === 'none' ? '/error' : '/tax'}
                            key={option.value}
                            className="relative items-center border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start hover:bg-emerald-50"
                        >
                            <div className="flex h-6 items-center">
                                <Checkbox id={`price-${option.value}`} name={`price-${option.value}`} />
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
                    )}
                    {/* <Dialog >
                        <DialogTrigger asChild>
                            <div className="relative border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start">
                                <div className="flex h-6 items-center">
                                    <Checkbox id="terms1" name="terms1" />
                                    <div className="ml-3 text-sm leading-6">
                                        <label
                                            htmlFor="terms1"
                                            className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Ninguna de las anteriores
                                        </label>

                                    </div>
                                </div>

                            </div>
                        </DialogTrigger>
                        <DialogContent className="bg-white sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Seleccione el presupuesto de tu proyecto</DialogTitle>
                                <DialogDescription>
                                    Seleccione el presuposito de tu proyecto
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
                    </Dialog> */}


                </div>

            </div>


        </div>
    )
}


export default Prices