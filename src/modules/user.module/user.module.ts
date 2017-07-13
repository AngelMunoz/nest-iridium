import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from "../database.module/database.module";
import { IridiumDatabaseConfig } from "../database.module/iridium.database.config";
import { DatabaseConfig } from "../database.module/database.config";

@Module({
  modules: [DatabaseModule],
  controllers: [UserController],
  components: [UserService,
    { provide: IridiumDatabaseConfig, useClass: DatabaseConfig }
  ],
})
export class UserModule { }