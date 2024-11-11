//environment variable
import dotenv from "dotenv"
dotenv.config()

//import model
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs"

//initialize model
const genAI = new GoogleGenerativeAI("AIzaSyCAkasLWPAxL2j3AHnd5j4a0AHRivrDDM8");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

//convert file to part which can then be uploaded
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}
async function ImageAI(){


const prompt = "in a tabular form, list the name of the book, the author, the isbn, the year of publication, the publisher and the edition of the book. You can browse online for the remaining info, but be sure to get information from the exact same edition of the book using the front cover as a reference"
const first_file = fileToGenerativePart("./images/a-brief-history-of-time.jpg", "image/jpeg")

const result = await model.generateContent([prompt, first_file]);

console.log(result.response.text());
}


ImageAI()