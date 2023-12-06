'use server'
import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

// Api endpoint to update task from the database
 
export async function POST(request: Request){
  const data = await request.json();
  try{
    const result = await prisma.task.update({
        where:{
            id:data.id
        },
        data:{
            title: data.title,
            description: data.description
        }})
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}