import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { Configuration, CreateOptions, Core } from "iridium";
import { IridiumDatabaseConfig } from "./iridium.database.config";
import { Database } from "./models/Database";
import * as Bluebird from 'bluebird';

@Component()
export class IridiumDatabaseService {
  private _db: Database;
  private _connection: Bluebird<Core>;

  constructor(private readonly databaseConfig: IridiumDatabaseConfig) {
    if (!this._db) {
      this.database();
    }
  }

  public async database(): Promise<Database> {
    if (!this._db) {
      try {
        this._db = new Database(this.databaseConfig);
      } catch (error) {
        console.error("Error While Getting to the DB", error)
      }
    }
    return this._db
  }

}