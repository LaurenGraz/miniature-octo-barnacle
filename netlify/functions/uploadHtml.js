export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const html = event.body;

  // Encode HTML into Base64 so it survives the redirect
  const encoded = Buffer.from(html, "utf8").toString("base64");

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "HTML encoded",
      url: `/.netlify/functions/viewHtml?data=${encoded}`
    })
  };
}
