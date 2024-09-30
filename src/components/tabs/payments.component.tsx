
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { DollarSign, Calendar, Building, Info } from "lucide-react"
export function TabsPayment() {
    return (
        <Tabs defaultValue="cash" className="w-full lg:w-[600px]">
            <TabsList className="grid gap-2 py-12 w-full grid-cols-2">
                <TabsTrigger value="cash">Pago al Contado</TabsTrigger>
                <TabsTrigger value="finance">Financiamiento</TabsTrigger>
            </TabsList>
            <TabsContent value="cash">
                <Card>
                    <CardHeader>
                        <CardTitle>Pago al Contado</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center mb-4">
                            <Calendar className="h-6 w-6 text-green-600 mr-3" />
                            <p className="text-gray-700">En 30 días será el cierre y entrega de tu unidad</p>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="finance">
                <Card>
                    <CardHeader>
                        <CardTitle>Financiamiento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Building className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">Debes solicitar en un banco local</p>
                            </li>
                            <li className="flex items-start">
                                <Calendar className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">En 30 días de la fecha de separación será tu cierre y entrega de tu unidad</p>
                            </li>
                            <li className="flex items-start">
                                <DollarSign className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">El día del cierre aportarás el mínimo del 20% del precio de venta menos los 5,000 USD de separación y financiarás hasta el 80% del precio de venta en calidad de préstamo hipotecario.</p>
                            </li>
                            <li className="flex items-start">
                                <Info className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">Gastos de cierre aplicarán dependiendo del banco seleccionado.</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

            </TabsContent>
        </Tabs>
    )
}
