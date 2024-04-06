import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) =>{
    const {userId,prompt , tag} = await req.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator : userId,
            prompt,
            tag
        })
        newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status : 201})

    } catch (error) {
        console.log('failed to save the prompt : ',error);
        return new Response('failed to create a prompt',{status : 500})
        
        
    }
}