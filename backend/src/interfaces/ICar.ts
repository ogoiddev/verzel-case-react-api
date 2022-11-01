import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = z.intersection(VehicleZodSchema, z.object({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
}));

export type ICar = z.infer<typeof CarZodSchema>;
