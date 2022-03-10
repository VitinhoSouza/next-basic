import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //pegar o cookie de autenticação
  
  // return new Response('Hello, world!')


  // return NextResponse.next() //Não intercepta
  return NextResponse.redirect("http://localhost:3000/") //redirecionar (ex: caso não esteja logado)
}