'use client'
import React, { use } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useWindowSize } from "@uidotdev/usehooks";


const TableTax = () => {
    const { width } = useWindowSize();
    const isMobile = width ? width < 768 : false;


    if (isMobile) {
        return (
            <div className="overflow-x-auto mt-6">
                <Table className="w-full ">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Tipo</TableHead>
                            <TableHead className="text-right">Precio (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Villa de 1 nivel</TableCell>
                            <TableCell className="text-right">559,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Villa de 2 niveles</TableCell>
                            <TableCell className="text-right">595,000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table className="w-full">
                    <TableCaption className="text-sm text-muted-foreground mb-4">
                        Préstamos hipotecarios en dólares estadounidenses a una tasa de interés del 8.25% APR fijo durante el primer año. Pagos mensuales calculados en principal e interés. Seguros de vida y de propiedad serán aplicables dependiendo de factores tales como edad y término del préstamo hipotecario.
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[130px]">Proyección del ahorro en 15 años</TableHead>
                            <TableHead className="w-[130px] text-right">Resta del precio de venta en 15 años</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">150,304.22
                            </TableCell>
                            <TableCell className="text-right">408,695.78
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto mt-6">
            <Table className="w-full  min-w-[640px]">
                <TableCaption className="text-sm mt-4 text-muted-foreground mb-4">
                    Los ahorros en impuestos deben calcularse e incluso cambiar automáticamente con respecto a tres factores; precio de venta, fecha en que el participante está completando este formulario y la fecha de entrega del proyecto. Las restas del precio de venta menos el ahorro acumulado en 15 años deben calcularse automáticamente.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Tipo</TableHead>
                        <TableHead className="text-right">Precio (USD)</TableHead>
                        <TableHead className="text-right ">Proyección del ahorro en 15 años</TableHead>
                        <TableHead className="text-right">Resta del precio de venta en 15 años</TableHead>
                        <TableHead className="text-right">Ahorro adicional en el cierre en USD</TableHead>
                        <TableHead className="text-right">Precio de venta final proyectado en USD</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Villa de 1 nivel</TableCell>
                        <TableCell className="text-right">559,000</TableCell>
                        <TableCell className="text-right">150,304.22</TableCell>
                        <TableCell className="text-right">408,695.78</TableCell>
                        <TableCell className="text-right">presentación privada.</TableCell>
                        <TableCell className="text-right">presentación privada </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Villa de 2 niveles</TableCell>
                        <TableCell className="text-right">595,000</TableCell>
                        <TableCell className="text-right">159,983.92 </TableCell>
                        <TableCell className="text-right">435,016.08 </TableCell>
                        <TableCell className="text-right">presentación privada.</TableCell>
                        <TableCell className="text-right">presentación privada </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TableTax