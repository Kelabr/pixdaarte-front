import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Sobre(){
    return(
        <main>
            <Header/>
            <div className="flex flex-col gap-2 py-4 px-4">
                <h1 className="font-bold text-4xl">Sobre</h1>
                <p className="text-gray-400">plataforma digital criada para conectar artistas locais ao seu público por meio do apoio direto via Pix. O projeto nasce com o propósito de valorizar a arte independente, especialmente de artistas que não têm acesso a grandes editais, patrocínios ou visibilidade nas redes.
                Através de um cadastro simples, artistas de todo o Brasil podem criar um perfil com sua arte, biografia e chave Pix. O público, por sua vez, pode descobrir talentos por cidade, estilo artístico ou região, e fazer doações de forma direta e sem intermediários.</p>
                <div className="flex justify-center w-full">
                    <Link href="/artista/pixdaarte" className="flex justify-center w-full max-w-[200px] mt-6"><Button className="w-full"><Image src="/pix.svg" alt="pix" height={20} width={20}/>Apoie</Button></Link>
                </div>

            </div>
            
        </main>
    )
}