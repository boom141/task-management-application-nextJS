'use server'
import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(){
  try{
    const result = await prisma.task.findMany({orderBy:[{ id: 'desc' }]})
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}