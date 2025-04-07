import RegisterForm from "@/components/RegisterForm";

export default function Register(){
    return(
        <main className="h-screen">
            <div className="px-4 lg:flex justify-center">
                <div className="lg:w-full max-w-[580px]">
                    <RegisterForm/>
                </div>
            </div>
        </main>
    )
}