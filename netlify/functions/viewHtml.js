export async function handler(event) {
  const encoded = event.queryStringParameters.data;

  if (!encoded) {
    return { statusCode: 404, body: "No HTML provided" };
  }

  const html = Buffer.from(encoded, "base64").toString("utf8");

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html
  };
}
