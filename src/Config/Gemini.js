/*
 * Install the Generative AI SDK
 * api key=AIzaSyB0fainIM_PnIz_vCRH35KOyENDoMWbeVE
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

// Replace the process.env line with your actual API key
const apiKey = "AIzaSyB0fainIM_PnIz_vCRH35KOyENDoMWbeVE"; // API key directly as a string

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
}

export default run;