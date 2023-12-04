import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(){
  try{
    const result = await prisma.task.findMany({orderBy:[{ id: 'desc' }]})
    return NextResponse.json(result)
  }catch(err){
    console.log(err)
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}