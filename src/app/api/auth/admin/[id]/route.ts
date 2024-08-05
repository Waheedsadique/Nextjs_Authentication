import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";



// get by id 

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
     connect();
    const user = await User.findById(id);
    return NextResponse.json(user);
}

// update by id

export async function PUT(request: NextRequest , { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(user);
   
}