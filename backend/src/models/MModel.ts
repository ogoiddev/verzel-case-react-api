import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MModel<T> implements IModel<T> {
  constructor(private model: Model<T>) { }

  async read(): Promise<T[]> {
    const results = this.model.find();
    return results;
  }
  
  async readOneById(_id: string): Promise<T | null> {
    const results = await this.model.findOne({ _id });
    return results;
  }

  async readOneByEmail(email: string): Promise<T | null> {
    const results = await this.model.findOne({ email });
    return results;
  }
  
  async delete(_id: string): Promise<T | null> {    
    const results = await this.model.findByIdAndDelete({ _id });
    return results;
  }

  public async create(dataValue: T): Promise<T> {
    const results = await this.model.create({ ...dataValue });
    return results;
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {    
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default MModel;