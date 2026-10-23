
export async function POST({ request }) {
    const { input } = await request.json();
    const response = await fetch("http://127.0.0.1:3000/" + input.replace(" ", "/"));
    const data = await response.json();

    return Response.json(data);
}