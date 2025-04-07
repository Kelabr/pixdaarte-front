import LoginForm from "@/components/LoginForm";

export default function Login(){
    return(
        <main className="h-screen">
            <div className="px-4 lg:flex justify-center">
                <div className="lg:w-full max-w-[580px]">
                    <LoginForm/>
                </div>
            </div>
        </main>
    )
}