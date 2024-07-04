import z from "zod";

export const MessageSchema = z.object({
content: z
.string()
.min(10,{message:"Content must be at least of 10 characters"})
.max(30,{message:'Content must be no longer then least of 300 characters'})
});
