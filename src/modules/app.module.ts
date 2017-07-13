import { Module } from '@nestjs/common';
import { UserModule } from "./user.module/user.module";

@Module({
    modules: [UserModule]
})
export class ApplicationModule { }