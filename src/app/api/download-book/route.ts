import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Verify the user has paid for the book
    const userRef  = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists() || !userSnap.data().isBookPaid) {
      return NextResponse.json({ error: "Book not purchased" }, { status: 403 });
    }

    // Stream the PDF from the private folder
    const pdfPath = path.join(process.cwd(), "private", "agricet-book.pdf");
    if (!fs.existsSync(pdfPath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(pdfPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="AGRICET_Objective_Book.pdf"',
        "Content-Length": fileBuffer.byteLength.toString(),
        "Cache-Control": "private, no-cache",
      },
    });
  } catch (err) {
    console.error("Book download failed:", err);
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
