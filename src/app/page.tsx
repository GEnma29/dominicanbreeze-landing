
import StartSection from '@/components/sections/start'
import StartImage from '@/assets/img/centro-punta-cana.png'

export default function Home() {
  return (
    <div className="">
      <StartSection
        greeting='Bienvenido(a) a Dominican Breeze International Realty'
        title='Empresa de Bienes Raíces, Líder en Proyectos Nuevos en la República Dominicana'
        subtitle=''
        content='Te encuentras aquí porque deseas una presentación virtual privada con todos los detalles de este hermoso proyecto. Siempre valoramos tu tiempo y por eso te haremos unas valiosas preguntas con el propósito de cualificarte.'
        question='¿Estás de acuerdo?'
        href='/description'
        image={{
          src: StartImage.src,
          alt: "Imagen de bienvenida de Dominican Breeze International Realty",
          position: "right"
        }}
      />
    </div>
  );
}
