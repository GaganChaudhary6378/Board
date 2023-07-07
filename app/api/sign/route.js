import { connectToDB } from "../../../utils/database";
import Users from "../../../models/Schema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectToDB();
    
    const request = await req.json()
    // console.log(request)

    if (!request) {
        return NextResponse.json({ status: 404, body: { error: "Don't have form data...!" } });
    }
    
    const { username, email, password } = request;
    // console.log(username)
    // console.log(email)
    
    //check existing users
    
    const checkexisting = await Users.findOne({ email });
    if (checkexisting) {
      return NextResponse.json({ status: 422, message: "User Already Exists...!"  });
    }

    const hashedPassword = await hash(password, 12);

    const newUser = await Users.create({username,email,password: hashedPassword});

    return NextResponse.json({ status: 201, user: newUser });
    
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
}

