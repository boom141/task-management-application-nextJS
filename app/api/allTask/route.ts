'use server'
import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

// Api endpoint for getting all the tasks from the database

export async function GET(){
  try{
    const result = await prisma.task.findMany({orderBy:[{ id: 'desc' }]})
    return NextResponse.json(result)
  }catch(err){
    return NextResponse.json({errorMessage:err, status:500});
  }
  
}