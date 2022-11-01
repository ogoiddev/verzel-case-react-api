"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MModel {
    constructor(model) {
        this.model = model;
    }
    async read() {
        const results = this.model.find();
        return results;
    }
    async readOne(dataValue) {
        const results = await this.model.findOne({ dataValue });
        return results;
    }
    async delete(_id) {
        const results = await this.model.findByIdAndDelete({ _id });
        return results;
    }
    async create(dataValue) {
        const results = await this.model.create({ ...dataValue });
        return results;
    }
    async update(_id, obj) {
        return this.model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
    }
}
exports.default = MModel;
