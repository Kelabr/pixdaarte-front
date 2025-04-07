import { NextResponse } from "next/server";


export async function middleware(req){

    const token = req.cookies.get('token')?.value;
    const {pathname} = req.nextUrl

    if(!token && pathname.startsWith('/teste')){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(token){

        if(pathname.startsWith('/login') || pathname.startsWith('/register') ){
            return NextResponse.redirect(new URL('/teste', req.url))
        }
    }



}

export const config = {
    matcher: ["/teste","/login", "/register"], // Protege todas as rotas dentro de /dashboard
};