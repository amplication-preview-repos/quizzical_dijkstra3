import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthTokenService } from "./authToken.service";
import { AuthTokenControllerBase } from "./base/authToken.controller.base";

@swagger.ApiTags("authTokens")
@common.Controller("authTokens")
export class AuthTokenController extends AuthTokenControllerBase {
  constructor(
    protected readonly service: AuthTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
