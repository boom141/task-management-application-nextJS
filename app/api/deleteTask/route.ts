'use server'
import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

// Api enpoint for deleteing a task from database

export async function POST(request: Request){
  const data = await request.json();
  try{
    const result = await prisma.task.delete({where: {id: data.id}});
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}