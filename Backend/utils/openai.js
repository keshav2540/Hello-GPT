import dotenv from "dotenv";
dotenv.config({ quiet: true });

const getOpenAIAPIResponse = async (message) => {
    console.log(
      "Gemini key loaded:",
      process.env.GEMINI_API_KEY ?
        process.env.GEMINI_API_KEY.slice(0, 10) + "..."
      : "undefined!",
    );
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [{ text: message }]
            }]
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Gemini raw response:", JSON.stringify(data, null, 2));

        if (data.error) {
            console.log("Gemini API error:", data.error.message);
            return "Sorry, kuch error aa gaya: " + data.error.message;
        }

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.log("Unexpected response shape:", data);
            return "Sorry, AI se valid response nahi mila.";
        }

        return data.candidates[0].content.parts[0].text;
    } catch (err) {
        console.log("Fetch/network error:", err);
        return "Sorry, server error aa gaya.";
    }
}
export default getOpenAIAPIResponse;