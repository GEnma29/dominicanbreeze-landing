'use client'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useWindowSize } from "@uidotdev/usehooks";
const TableExamples = () => {
    const { width } = useWindowSize();
    const isMobile = width ? width < 768 : false;


    if (isMobile) {
        return (
            <div className="overflow-x-auto mt-6">
                <Table className="w-full ">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] bg-gray-100 border-r-2">Tipo</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Precio (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium border-r-2">Villa de 1 nivel</TableCell>
                            <TableCell className="text-right border-r-2">559,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border-r-2">Villa de 2 niveles</TableCell>
                            <TableCell className="text-right border-r-2">595,000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] bg-gray-100 border-r-2">Separación (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Down Payment (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Préstamo (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Pago Mensual (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium  border-r-2">5,000</TableCell>
                            <TableCell className="text-right  border-r-2">106,800</TableCell>
                            <TableCell className="text-right  border-r-2">447,200</TableCell>
                            <TableCell className="text-right  border-r-2">3,810.44</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] bg-gray-100 border-r-2">Separación (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Down Payment (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Préstamo (USD)</TableHead>
                            <TableHead className="text-right bg-gray-100 border-r-2">Pago Mensual (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-right border-r-2">5,000</TableCell>
                            <TableCell className="text-right border-r-2">113,600</TableCell>
                            <TableCell className="text-right border-r-2">483,600</TableCell>
                            <TableCell className="text-right border-r-2">4,415.44</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableCaption className="text-sm text-muted-foreground mb-4">
                        Préstamos hipotecarios en dólares estadounidenses a una tasa de interés del 8.25% APR fijo durante el primer año y Loan to Value del 80% del precio de venta o tasación, el que sea menor. Pagos mensuales aproximados, calculados en principal e interés. Seguros de vida y de propiedad serán aplicables dependiendo de factores tales como edad y término del préstamo hipotecario.
                    </TableCaption>
                </Table>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto mt-6">
            <Table className="w-full border-2  min-w-[640px]">
                <TableCaption className="text-sm text-muted-foreground mb-4">
                    Préstamos hipotecarios en dólares estadounidenses a una tasa de interés del 8.25% APR fijo durante el primer año y Loan to Value del 80% del precio de venta o tasación, el que sea menor. Pagos mensuales aproximados, calculados en principal e interés. Seguros de vida y de propiedad serán aplicables dependiendo de factores tales como edad y término del préstamo hipotecario.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] bg-gray-100 border-r-2">Tipo</TableHead>
                        <TableHead className="text-right bg-gray-100 border-r-2">Precio (USD)</TableHead>
                        <TableHead className="text-right bg-gray-100 border-r-2">Separación (USD)</TableHead>
                        <TableHead className="text-right bg-gray-100 border-r-2">Down Payment (USD)</TableHead>
                        <TableHead className="text-right bg-gray-100 border-r-2">Préstamo (USD)</TableHead>
                        <TableHead className="text-right bg-gray-100 border-r-2">Pago Mensual (USD)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium border-r-2">Villa de 1 nivel</TableCell>
                        <TableCell className="text-right border-r-2">559,000</TableCell>
                        <TableCell className="text-right border-r-2">5,000</TableCell>
                        <TableCell className="text-right border-r-2">106,800</TableCell>
                        <TableCell className="text-right border-r-2">447,200</TableCell>
                        <TableCell className="text-right border-r-2">3,810.44</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium border-r-2">Villa de 2 niveles</TableCell>
                        <TableCell className="text-right border-r-2">595,000</TableCell>
                        <TableCell className="text-right border-r-2">5,000</TableCell>
                        <TableCell className="text-right border-r-2">113,600</TableCell>
                        <TableCell className="text-right border-r-2">483,600</TableCell>
                        <TableCell className="text-right border-r-2">4,415.44</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TableExamples