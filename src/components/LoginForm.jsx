"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm(){
    const router = useRouter()
    const [error, setError] = useState("")


    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const email = formData.get("email")
        const senha = formData.get("senha")

        try{
            
            const response = await fetch("http://localhost:3333/api/login", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email, senha}),
                credentials:"include"
            })

  
        
            if(!response.ok){
                setError("Usuário não encontrado")
                console.log("Não conseguiu logar")
                return
            }


        }catch(error){
            console.error("Erro ao acessar", error)
        }

        router.push("/teste")




    }


    return(
        <form action="" className="relative top-30" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Login</h1>
                <p className="text-gray-500">Bem vindo ao Pix da Arte</p>
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="font-medium">Email</label>
                <input className="border-2 p-2 rounded-lg" type="text" name="email" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-medium">Senha</label>
                <input className="border-2 p-2 rounded-lg" type="password" name="senha"/>
            </div>
            <button className="w-full bg-black text-white p-2 mt-6">Entrar</button>
            <div className="flex justify-center mt-4">
                <Link href="/register" className="underline focus:text-gray-500">Cadastre-se</Link>
            </div>
        </form>
    )
}