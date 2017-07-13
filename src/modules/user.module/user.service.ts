import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { IridiumDatabaseService } from "../database.module/iridium.database.service";
import { IService } from "../../interfaces/IService";
import { User } from "../database.module/models/user/user";
import { Database } from "../database.module/models/Database";

@Component()
export class UserService implements IService<User> {
  private database: Database;
  constructor(private readonly $db: IridiumDatabaseService) {
    this.seed();
  }

  async find(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  async findOne(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async create(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async destroy(): Promise<User> {
    throw new Error("Method not implemented.");
  }

  private async seed() {
    this.database = this.$db.database
    const cursor = this.database.Users.find();
    const count = await cursor.count();
    let users;
    if (count <= 0) {
      users = await this.database.Users.create([
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
    }
    console.log('db already seeded')
  }

}