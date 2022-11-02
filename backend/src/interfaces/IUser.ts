import { z } from 'zod';

export const UserZodSchema = z.object({
  name: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().max(16), 
  thumb: z.string(),
});
  
export type IUser = z.infer<typeof UserZodSchema>;