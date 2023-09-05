import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { StaffInfo } from "./StaffInfo";

@Resolver(StaffInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => StaffInfo)
  async login(@Args() args: LoginArgs): Promise<StaffInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => StaffInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async staffInfo(@UserData() entityInfo: StaffInfo): Promise<StaffInfo> {
    return entityInfo;
  }
}
