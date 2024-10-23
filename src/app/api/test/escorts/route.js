import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/lib/db";
import { escortModel } from "@/lib/model/escortModel";
// const { username, password } = process.env;

// // const connectionStr = `mongodb+srv://${username}:${password}@cluster0.hju83.mongodb.net/Lead-play?retryWrites=true&w=majority&appName=Cluster0`;
// const connectionStr = `mongodb+srv://admin:12345@cluster0.hju83.mongodb.net/Lead-play?retryWrites=true&w=majority&appName=Cluster0`;

export async function GET() {
  console.log("connectionStr -->", connectionStr);
  try {
    await mongoose.connect(connectionStr);
  } catch (e) {
    console.log("", e);
    throw new Error(e);
  }
  // const data = await escortModel.find();
  // console.log("datav-->", data);
  return NextResponse.json({ response: true });
}
