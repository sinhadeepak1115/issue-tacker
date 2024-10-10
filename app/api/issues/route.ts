import { NextRequest } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const issueSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    return new Response(JSON.stringify(validation.error), {
      status: 400,
    });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return new Response(JSON.stringify(newIssue), { status: 201 });
}
