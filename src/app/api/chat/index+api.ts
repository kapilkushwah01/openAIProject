import {OpenAI } from 'openai'
const openai= new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY
})

export async function POST(request: Request){
    const {message} = await request.json();
     try {
    const response = await openai.responses.create({
      model: 'gpt-4.1',
      input: message
    });

    return Response.json({
      responseMessage: response.output_text
    });
  } catch (error) {
    console.error('OpenAI error:', error);
    return Response.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
    return Response.json({nmae:'kapil'})
}