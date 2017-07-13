import { IridiumDatabaseConfig } from "./iridium.database.config";
import { Configuration } from "iridium";
import { Component } from "@nestjs/common";

@Component()
export class DatabaseConfig extends IridiumDatabaseConfig {

  getConfiguration(): Configuration {
    return {
      host: 'localhost',
      port: 27017,
      database: 'iridium-test',
      options: {
        autoReconnect: true
      }
    }
  }


}