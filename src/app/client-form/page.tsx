'use client';
import React, { useRef } from 'react';
import useExecuteOnSecondCall from '@/hooks/isSecoundTime.hook';
import { useRouter } from 'next/navigation'

const ClientFromPage: React.FC = () => {
    const router = useRouter()
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const handleButtonClick = useExecuteOnSecondCall(() => {
        console.log('¡Soy ejecutada la segunda vez!');
        router.push('/capacity');

    });


    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <iframe
                ref={iframeRef}
                onLoad={handleButtonClick}
                className="w-[400px] h-[700px]"
                src="https://pages.wiseagent.com/pages/?id=BFB343EC-F5B7-4209-B01C-95709E8F6654"
                title="Contenido externo"
            />
        </div>
    );
};

export default ClientFromPage;