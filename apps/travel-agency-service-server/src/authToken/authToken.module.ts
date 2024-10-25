import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthTokenModuleBase } from "./base/authToken.module.base";
import { AuthTokenService } from "./authToken.service";
import { AuthTokenController } from "./authToken.controller";
import { AuthTokenResolver } from "./authToken.resolver";

@Module({
  imports: [AuthTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthTokenController],
  providers: [AuthTokenService, AuthTokenResolver],
  exports: [AuthTokenService],
})
export class AuthTokenModule {}
