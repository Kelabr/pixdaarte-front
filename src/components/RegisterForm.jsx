import Link from "next/link";

export default function RegisterForm(){
    return(
        <form action="" className="relative top-18">
            <div className="flex flex-col gap-2"> 
                <div className="mb-4 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Registre-se</h1>
                    <p className="text-gray-500">Cadastre-se no Pix da Arte</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Nome</label>
                    <input className="border-2 p-2 rounded-lg" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Chave Pix</label>
                    <span className="sm text-gray-500 text-[12px]">*Aconselhamos que use uma chave aleatória</span>
                    <input className="border-2 p-2 rounded-lg" type="text"/>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <label className="font-medium">Email</label>
                    <input className="border-2 p-2 rounded-lg" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Senha</label>
                    <input className="border-2 p-2 rounded-lg" type="password"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Confirmar Senha</label>
                    <input className="border-2 p-2 rounded-lg" type="password"/>
                </div>
                </div>
           
            <button className="w-full bg-black text-white p-2 mt-6">Entrar</button>
        </form>
    )
}