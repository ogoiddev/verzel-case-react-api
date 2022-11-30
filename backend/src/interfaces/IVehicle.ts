import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number(),
  color: z.string(),
  status: z.boolean().optional(), 
  buyValue: z.number().int(),
  thumb: z.string().optional(),
  features: z.object({
    state: z.string().max(20),
    city: z.string().max(30).optional(),
    km: z.number().max(1000000),
    gearShift: z.string().max(20).optional(),
  }),
});
  
export type IVehicle = z.infer<typeof VehicleZodSchema>;