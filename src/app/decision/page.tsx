import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'


const Options = [
    { value: '100%', label: 'Yo decido al 100%.' },
    { value: '50%', label: 'No decido yo al 100% (Pero SÍ me comprometo a incluir en la presentación a la(s) otra(s) persona(s) que comparten la decisión final conmigo.' },
    { value: '0%', label: 'No decido yo al 100% (Pero NO me puedo comprometer a incluir en la presentación a la(s) otra(s) persona(s) que toman la decisión final conmigo.' },


]

const DecisionPage = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">LA DECISIÓN DE SELECCIÓN</h1>
            <h3 className=" text-center mt-6 mb-4 text-2xl font-semibold leading-6 text-emerald-900">Si luego de la presentación privada, concluyeras que este es el proyecto en donde deseas invertir ¿quién tomaría la decisión final de separar tu unidad?</h3>
            <div className="space-y-5">
                {Options.map((option) => {
                    return (
                        <a
                            href={option.value === '0%' ? '/error' : '/compromise'}
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
                        </a>
                    )
                })}
            </div>
        </div >
    )
}

export default DecisionPage