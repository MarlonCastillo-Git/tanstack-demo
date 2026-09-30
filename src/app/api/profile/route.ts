import { NextResponse } from "next/server";
import { profile, sleep } from "@/lib/data";

export async function GET() {
    await sleep(800); //simulo latencia. Es a propósito
    return NextResponse.json(profile);
}