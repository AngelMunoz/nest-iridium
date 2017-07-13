import { IridiumDatabaseConfig } from "./iridium.database.config";
import { Configuration } from "iridium";
import { Component } from "@nestjs/common";

@Component()
export class DatabaseConfig extends IridiumDatabaseConfig {

  getConfiguration(): Configuration {
    return {
      database: '',
      host: '',
      port: 0,
      username: '',
      password: '',
      options: {
        autoReconnect: true
      }
    }
  }


}