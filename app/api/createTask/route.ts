import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: Request){
  const data = await request.json();
  try{
    const result = await prisma.task.create({data:data})
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}