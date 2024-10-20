'use client'
import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useRouter } from 'next/navigation'
const CandelyPage = () => {
    const router = useRouter()

    useCalendlyEventListener({
        onEventScheduled: (e) => {
            console.log(e.data.payload)
            router.push('/end');
        },
    });
    return (
        <div className="w-full p-4 overflow-y-hidden">
            <InlineWidget
                url="https://calendly.com/dominicanbreeze/bv-sjl-punta-cana" />
        </div>

    )
}

export default CandelyPage