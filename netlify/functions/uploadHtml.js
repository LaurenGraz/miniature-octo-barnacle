import { v4 as uuid } from "uuid";

let htmlStore = {};

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const id = uuid();
  htmlStore[id] = event.body;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "HTML stored",
      id,
      url: `/.netlify/functions/viewHtml?id=${id}`
    })
  };
}

export const store = htmlStore;
