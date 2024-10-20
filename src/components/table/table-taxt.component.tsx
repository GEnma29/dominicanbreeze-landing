'use client'
import React from 'react'
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
                            <TableHead className="text-center">Precio (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Villa de 1 nivel</TableCell>
                            <TableCell className="text-center">559,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Villa de 2 niveles</TableCell>
                            <TableCell className="text-center">595,000</TableCell>
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
                            <TableHead className="w-[130px] text-center">Resta del precio de venta en 15 años</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">150,304.22
                            </TableCell>
                            <TableCell className="text-center">408,695.78
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto mt-6">
            <Table className="w-full border-2  rounded-lg  w-[520px]">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] border-r-2 bg-gray-100">Tipo</TableHead>
                        <TableHead className="text-center border-r-2 bg-gray-100">Precio (USD)</TableHead>
                        <TableHead className="text-center max-w-[100px] border-r-2 bg-gray-100">Proyección del ahorro en 15 años</TableHead>
                        <TableHead className="text-center max-w-[100px] border-r-2 bg-gray-100">Resta del precio de venta en 15 años</TableHead>
                        <TableHead className="text-center max-w-[50px] border-r-2 bg-gray-100">Ahorro adicional en el cierre en USD</TableHead>
                        <TableHead className="text-center max-w-[100px] border-r-2 bg-gray-100">Precio de venta final proyectado en USD</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium border-r-2">Villa de 1 nivel</TableCell>
                        <TableCell className="text-center border-r-2">559,000</TableCell>
                        <TableCell className="text-center border-r-2">150,304.22</TableCell>
                        <TableCell className="text-center border-r-2">408,695.78</TableCell>
                        <TableCell className="text-center border-r-2">presentación privada.</TableCell>
                        <TableCell className="text-center border-r-2">presentación privada </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium border-r-2">Villa de 2 niveles</TableCell>
                        <TableCell className="text-center border-r-2">595,000</TableCell>
                        <TableCell className="text-center border-r-2">159,983.92 </TableCell>
                        <TableCell className="text-center border-r-2">435,016.08 </TableCell>
                        <TableCell className="text-center border-r-2">presentación privada.</TableCell>
                        <TableCell className="text-center border-r-2">presentación privada </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TableTax