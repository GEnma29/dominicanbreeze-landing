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
                            <TableHead className="w-[100px]">Separación (USD)</TableHead>
                            <TableHead className="text-right">Down Payment (USD)</TableHead>
                            <TableHead className="text-right">Préstamo (USD)</TableHead>
                            <TableHead className="text-right">Pago Mensual (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">5,000</TableCell>
                            <TableCell className="text-right">106,800</TableCell>
                            <TableCell className="text-right">447,200</TableCell>
                            <TableCell className="text-right">3,810.44</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto mt-6">
            <Table className="w-full  min-w-[640px]">
                <TableCaption className="text-sm text-muted-foreground mb-4">
                    Préstamos hipotecarios en dólares estadounidenses a una tasa de interés del 8.25% APR fijo durante el primer año. Pagos mensuales calculados en principal e interés. Seguros de vida y de propiedad serán aplicables dependiendo de factores tales como edad y término del préstamo hipotecario.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Tipo</TableHead>
                        <TableHead className="text-right">Precio (USD)</TableHead>
                        <TableHead className="text-right ">Separación (USD)</TableHead>
                        <TableHead className="text-right">Down Payment (USD)</TableHead>
                        <TableHead className="text-right">Préstamo (USD)</TableHead>
                        <TableHead className="text-right">Pago Mensual (USD)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Villa de 1 nivel</TableCell>
                        <TableCell className="text-right">559,000</TableCell>
                        <TableCell className="text-right">5,000</TableCell>
                        <TableCell className="text-right">106,800</TableCell>
                        <TableCell className="text-right">447,200</TableCell>
                        <TableCell className="text-right">3,810.44</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Villa de 2 niveles</TableCell>
                        <TableCell className="text-right">595,000</TableCell>
                        <TableCell className="text-right">5,000</TableCell>
                        <TableCell className="text-right">113,600</TableCell>
                        <TableCell className="text-right">483,600</TableCell>
                        <TableCell className="text-right">4,415.44</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default TableExamples