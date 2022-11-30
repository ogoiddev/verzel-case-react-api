export interface IModel<T> {
  create(dataValueObject: T): Promise<T>;
  read(): Promise<T[]>;
  carRead(): Promise<T[]>;
  readOneById(dataValue: string): Promise<T | null>;
  readOneByEmail(dataValue: string): Promise<T | null>;
  update(dataValue: string, dataValueObject: T): Promise<T | null>;
  delete(dataValue: string): Promise<T | null>;
}