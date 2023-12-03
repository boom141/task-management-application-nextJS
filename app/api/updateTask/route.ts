import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: Request){
  const data = await request.json();
  console.log(data);
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