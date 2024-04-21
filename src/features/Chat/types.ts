import { z } from 'zod'

const baseChatSchema = z.object({
    message: z.string(),
    time: z.string(),
    user: z.enum(['User', 'Assistance'])
})
const chatSchema = z.object({
    id: z.string(),
    history: z.record(baseChatSchema),

})

export type BaseChat = z.infer<typeof baseChatSchema>
export type Chat = z.infer<typeof chatSchema>

export type ChatState = {
    activeId: string | null;
    chats: Record<string, Chat>;
};