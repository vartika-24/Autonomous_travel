require("dotenv").config();

async function main() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Say hello in one sentence.",
              },
            ],
          },
        ],
      }),
    }
  );

  console.log("Status:", res.status);
  console.log(await res.text());
}

main().catch(console.error);