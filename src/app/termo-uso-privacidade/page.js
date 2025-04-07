import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function UsoPrivacidade(){
    return(
        <main>
            <Header/>
            <div className="flex flex-col gap-2 py-4 px-4">
                <h1 className="font-bold text-4xl w-full">Termo de Uso</h1>
                <p className="text-gray-400">Bem-vindo ao nosso aplicativo! Ao utilizar este serviço, você concorda com os seguintes termos:</p>
                <ol className="flex flex-col gap-2 text-gray-400 list-disc px-6">

                <li>so do Serviço
                Este aplicativo é destinado para uso pessoal. Você concorda em utilizá-lo de forma legal e ética, sem fins maliciosos ou atividades ilegais.</li>

                <li>Responsabilidade do Usuário
                Você é responsável pelas informações fornecidas no aplicativo. Não nos responsabilizamos por dados incorretos ou prejudiciais inseridos por usuários.</li>

                <li>Modificações no Serviço
                Podemos modificar ou encerrar o serviço a qualquer momento, sem aviso prévio.</li>

                <li>Conteúdo do Usuário
                Caso o aplicativo permita envio de conteúdo (textos, imagens, etc.), você nos concede permissão para utilizar esse conteúdo dentro do funcionamento da plataforma.</li>

                <li>Aceite dos Termos
                Ao continuar utilizando o aplicativo, você confirma que leu, entendeu e aceitou estes termos.</li>
                </ol>


            </div>

            <div className="flex flex-col gap-2 py-4 px-4">
                <h1 className="font-bold text-4xl w-full">Política de Privacidade</h1>
                <p className="text-gray-400">Levamos sua privacidade a sério. Aqui explicamos como seus dados são coletados e utilizados:</p>
                <ol className="flex flex-col gap-2 text-gray-400 list-disc px-6">

                <li>Podemos coletar informações como nome, e-mail, localização e preferências de uso, com o objetivo de melhorar a experiência no aplicativo.</li>

                <li>Os dados coletados são utilizados exclusivamente para funcionamento do app e para oferecer uma melhor experiência ao usuário.</li>

                <li>Adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados.</li>

                <li>Você pode solicitar a correção ou exclusão de seus dados a qualquer momento, entrando em contato conosco.</li>

                <li>Podemos utilizar cookies ou tecnologias similares para análise de uso e desempenho do aplicativo</li>

                <li>Podemos atualizar esta política periodicamente. Recomendamos revisá-la sempre que possível.</li>
                </ol>


            </div>
            
        </main>
    )
}