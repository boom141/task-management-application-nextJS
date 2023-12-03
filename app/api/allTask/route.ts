import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(){
  try{
    const result = await prisma.task.findMany()
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, errorCode:500});
  }
  
}