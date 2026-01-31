import { createClient } from "@/utils/firebase/server";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const auth = createClient();

  // Authorization ヘッダの Bearer トークン (IDトークン) を受け取る想定
  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

  if (!idToken) {
    revalidatePath("/", "layout");
    return NextResponse.redirect(new URL("/", req.url), { status: 302 });
  }

  try {
    const decoded = await auth.verifyIdToken(idToken);
    await auth.revokeRefreshTokens(decoded.uid);
  } catch (error) {
    console.error("Signout error:", error);
  }

  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/", req.url), { status: 302 });
}