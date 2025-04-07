import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 px-4">
        <p className="text-2xl font-semibold text-gray-400 text-center">Oppss... Nada foi encontrado aqui</p>
        <Image src="/404.svg" alt="404" height={500} width={500}/>
        <Link href="/" className='font-medium underline focus:text-gray-400'>Página Inicial</Link>
    </div>
  )
}