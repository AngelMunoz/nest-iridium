import { QueryOptions, CreateOptions, RemoveOptions } from "iridium";
import { IUserDocument } from "../modules/database.module/models/user/IUserDocument";

export interface IService<T> {
  find(conditions?: { [property: string]: number }, fields?: { [name: string]: number }): Promise<T[]>
  findOne(id: string, options?: QueryOptions): Promise<T>
  create(payload: IUserDocument | IUserDocument[], options?: CreateOptions): Promise<T | T[]>
  destroy(conditions: string | { [property: string]: object } | { _id?: string }, options?: RemoveOptions): Promise<number>
}