import { UserSchema } from "@/types";
import { NextResponse } from "next/server";
import { z } from "zod";

// create validation object
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request) {
  const body = await request.json();

  const result = UserSchema.safeParse(body);

  if (result.success) {
    return NextResponse.json({ success: true });
  }

  const serverErrors = Object.fromEntries(
    result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
  );

  return NextResponse.json({ errors: serverErrors });
}
