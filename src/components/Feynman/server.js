const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// const {Configuration, OpenAIApi}  = require ('openai');
const { OpenAI } = require('openai')


const app = express();
// const configuration = new Configuration({ apiKey: process.env.OPEN_API_KEY,})
// const openai = new OpenAIApi(configuration);
const openai = new OpenAI(process.env.OPENAI_API_KEY);
app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000', // or the port where your React app is running
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.post('/analyze', async (req, res) => {
    const { subject, explanation } = req.body;


    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: `Subject: ${subject}` },
                { role: "user", content: `Explanation: ${explanation}` },
                { role: "user", content: "Provide feedback on the explanation by identifying gaps in their explanation/unclear parts, emulating the feynman theory. The goal is for the user to have a clear and simple explanation. " }
            ],
        });

        const feedback = response.choices?.[0]?.message?.content?.trim();
        if (feedback) {
            res.send({ feedback });
        } else {
            // Handle the case where the expected path in the response does not exist
            console.error('Unexpected response structure:', response);
            res.status(500).send({ error: 'Unexpected response structure from OpenAI' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});