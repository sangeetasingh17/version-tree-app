import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM versions");
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err); // 👈 ADD THIS
    return NextResponse.json(
      { error: "DB error" },
      { status: 500 }
    );
  }
}