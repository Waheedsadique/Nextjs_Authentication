import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";



 
export async function GET() {
     connect();   
   const users = await User.find();
   return NextResponse.json(users);
 }


 export async function DELETE() {
     connect();   
   const users = await User.deleteMany();
   return NextResponse.json(users);
 }
