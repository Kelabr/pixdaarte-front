import { AlignJustify, User, CircleAlert, Lock } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
  

export default function Header(){
    return(
        <header className="flex justify-end shadow p-2 sticky top-0 bg-white">
            <Sheet key="top" className="">
            <SheetTrigger><AlignJustify size={38}/></SheetTrigger>
            <SheetContent side="top" className="px-2 pb-4">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-4 px-2">
                    <Link href="#" className="flex items-center gap-1 text-gray-500 font-medium focus:text-black"><User size={20}/> Minha Conta</Link>
                    <Link href="/sobre" className="flex items-center gap-1 text-gray-500 font-medium focus:text-black"><CircleAlert size={20}/> Sobre</Link>
                    <Link href="/termo-uso-privacidade" className="flex items-center gap-1 text-gray-500 font-medium focus:text-black"><Lock size={20}/>Uso e Privacidade</Link>
                </ul>
            </SheetContent>
            </Sheet>    
        </header>
    )
}