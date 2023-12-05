'use server'

import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(){
  try{
    const result = await prisma.task.findMany({orderBy:[{ id: 'desc' }]})
    const res = NextResponse.json(result)
    res.headers.set('Cache-Control', 'no-store')

    return res

  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}