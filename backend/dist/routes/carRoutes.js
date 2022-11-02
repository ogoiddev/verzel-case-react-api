"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carRoute = (0, express_1.Router)();
carRoute.get('/', (_req, res) => res.json('API Connected - APP listen'));
exports.default = carRoute;
