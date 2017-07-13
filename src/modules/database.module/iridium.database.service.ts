import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { Configuration, CreateOptions } from "iridium";
import { IridiumDatabaseConfig } from "./iridium.database.config";
import { Database } from "./models/Database";


@Component()
export class IridiumDatabaseService {
  private _db: Database;

  constructor(private readonly databaseConfig: IridiumDatabaseConfig) {
    if (!this._db) {
      this._db = new Database(this.databaseConfig);
    }
  }

  public get database(): Database {
    if (!this._db) {
      return new Database(this.databaseConfig);
    } else {
      return this._db;
    }
  }

}