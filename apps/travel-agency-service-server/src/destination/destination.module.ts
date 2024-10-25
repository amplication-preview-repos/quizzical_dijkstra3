import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DestinationModuleBase } from "./base/destination.module.base";
import { DestinationService } from "./destination.service";
import { DestinationController } from "./destination.controller";
import { DestinationResolver } from "./destination.resolver";

@Module({
  imports: [DestinationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DestinationController],
  providers: [DestinationService, DestinationResolver],
  exports: [DestinationService],
})
export class DestinationModule {}
