"use client"

import { useState } from "react"

export default function RegisterForm(){

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const nome = formData.get("nome")
        const email = formData.get("email")
        const pix = formData.get("pix")
        const cidade = formData.get("cidade")

        if(password != confirmPassword){
            setError("Inconcistencia nas senhas")
            return
        }


        try{
            const response = await fetch("http://localhost:3333/api/create", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({nome, email, pix, cidade, password})
            })

            if(!response.ok){
                setError("*Erro ao enviar formulário")
                return
            }
        
        }catch(error){
            setError("*Erro no cadastro")
        }

        console.log("Login feito com sucesso")

    }

    return(
        <form action="" className="relative top-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2"> 
                <div className="mb-4 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Registre-se</h1>
                    <p className="text-gray-500">Cadastre-se no Pix da Arte</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Nome</label>
                    <input className="border-2 p-2 rounded-lg" type="text" name="nome"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Chave Pix</label>
                    <span className="sm text-gray-500 text-[12px]">*Aconselhamos que use uma chave aleatória</span>
                    <input className="border-2 p-2 rounded-lg" type="text" name="pix"/>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <label className="font-medium">Email</label>
                    <input className="border-2 p-2 rounded-lg" type="text" name="email" />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <label className="font-medium">Cidade</label>
                    <input className="border-2 p-2 rounded-lg" type="text" name="cidade" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Senha</label>
                    <input className="border-2 p-2 rounded-lg" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Confirmar Senha</label>
                    <input className="border-2 p-2 rounded-lg" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </div>
                </div>
           
            <button className="w-full bg-black text-white p-2 mt-6">Entrar</button>
        </form>
    )
}