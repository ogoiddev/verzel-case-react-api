"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleZodSchema = void 0;
const zod_1 = require("zod");
exports.VehicleZodSchema = zod_1.z.object({
    model: zod_1.z.string().min(3),
    year: zod_1.z.number().min(1900).max(2022),
    color: zod_1.z.string().min(3),
    status: zod_1.z.boolean().optional(),
    buyValue: zod_1.z.number().int(),
});
