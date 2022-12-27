const openai = require('openai');

openai.apiKey = "YOUR_API_KEY";

const generateImage = async () => {
  const model = "image-alpha-001";
  const prompt = "Generate a beautiful landscape image";

  const response = await openai.completions.create({
    model,
    prompt,
    temperature: 0.7,
    max_tokens: 2048,
  });

  return response.choices[0].text;
}

const displayImage = async () => {
  const imageUrl = await generateImage();
  const imageElement = document.getElementById('image');
  imageElement.src = imageUrl;
}

displayImage();
