import { store as htmlStore } from "./uploadHtml.js";

export async function handler(event) {
  const id = event.queryStringParameters.id;

  if (!id || !htmlStore[id]) {
    return { statusCode: 404, body: "HTML not found" };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: htmlStore[id]
  };
}
