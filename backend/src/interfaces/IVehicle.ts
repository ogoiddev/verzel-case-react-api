import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string(),
  status: z.boolean().optional(), 
  buyValue: z.number().int(),
  imgs: z.array(z.string()),
  features: z.object({
    state: z.string().max(20),
    city: z.string().max(30),
    km: z.number().max(6),
    gearShift: z.string().max(10),
  }),
});
  
export type IVehicle = z.infer<typeof VehicleZodSchema>;