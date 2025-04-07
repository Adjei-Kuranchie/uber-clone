import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL!}`);
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        // eslint-disable-next-line prettier/prettier
        { status: 400 }
      );
    }

    const response = await sql`
    INSERT INTO users (
      name, 
      email, 
      clerk_id
      )
    VALUES (
      ${name}, 
      ${email}, 
      ${clerkId}
      );
  `;
    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    console.error("Error inserting user:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
