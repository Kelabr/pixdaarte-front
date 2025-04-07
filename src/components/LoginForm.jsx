import Link from "next/link";

export default function LoginForm(){
    return(
        <form action="" className="relative top-30">
            <div className="mb-4 flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Login</h1>
                <p className="text-gray-500">Bem vindo ao Pix da Arte</p>
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="font-medium">Email</label>
                <input className="border-2 p-2 rounded-lg" type="text" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-medium">Senha</label>
                <input className="border-2 p-2 rounded-lg" type="password"/>
            </div>
            <button className="w-full bg-black text-white p-2 mt-6">Entrar</button>
            <div className="flex justify-center mt-4">
                <Link href="/register" className="underline focus:text-gray-500">Cadastre-se</Link>
            </div>
        </form>
    )
}