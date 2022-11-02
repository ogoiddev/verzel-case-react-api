"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarZodSchema = void 0;
const zod_1 = require("zod");
const IVehicle_1 = require("./IVehicle");
exports.CarZodSchema = zod_1.z.intersection(IVehicle_1.VehicleZodSchema, zod_1.z.object({
    doorsQty: zod_1.z.number().min(2).max(4),
    seatsQty: zod_1.z.number().min(2).max(7),
}));
