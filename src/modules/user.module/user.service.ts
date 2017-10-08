import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { IridiumDatabaseService } from "../database.module/iridium.database.service";
import { IService } from "../../interfaces/IService";
import { User } from "../database.module/models/user/user";
import { Database } from "../database.module/models/Database";
import { Model, QueryOptions, CreateOptions, RemoveOptions, Core } from "iridium";
import { IUserDocument } from "../database.module/models/user/IUserDocument";

@Component()
export class UserService implements IService<User> {

  private _database: Database;
  constructor(private readonly DatabaseService: IridiumDatabaseService) {
    this.ConnectToDb();
  }

  async find(conditions?: { [property: string]: number }, fields?: { [name: string]: number }): Promise<User[]> {
    await this._database.connect();
    const cursor = this._database.Users.find(conditions, fields);
    const users = await cursor.toArray();
    this._database.close();
    return users;
  }
  async findOne(id: string, options?: QueryOptions): Promise<User> {
    await this._database.connect();
    const user = await this._database.Users.findOne(id, options);
    this._database.close();
    return user;
  }

  async create(payload: IUserDocument | IUserDocument[], options?: CreateOptions): Promise<User | User[]> {
    await this._database.connect();
    const p = payload as IUserDocument[];
    let result;
    if (p.length) {
      result = await this._database.Users.insert(p, options);
    } else {
      result = await this._database.Users.insert(payload as IUserDocument, options);
    }
    this._database.close();
    return result;
  }

  async destroy(conditions: string | { [property: string]: object } | { _id?: string }, options?: RemoveOptions): Promise<number> {
    await this._database.connect();
    const removedCount = await this._database.Users.remove(conditions, options);
    this._database.close();
    return removedCount;
  }

  private async ConnectToDb() {
    try {
      this._database = await this.DatabaseService.database();
      await this.seed();
    } catch (error) {
      return console.log(error);
    }
  }

  private async seed() {
    await this._database.connect();
    const cursor = this._database.Users.find();
    const count = await cursor.count();
    if (count <= 0) {
      const users = await this._database.Users.insert([
        {
          name: 'pedro'
        },
        {
          name: 'pica'
        },
        {
          name: 'piedra'
        },
      ])
      console.log('seeded users', users);
      return this._database.close();
    }
    console.log('db already seeded')
    return this._database.close();
  }

}