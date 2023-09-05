import { Inject, Injectable } from "@nestjs/common";
import { JWT_SECRET_KEY } from "../../constants";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { StaffService } from "../../staff/staff.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
    @Inject(JWT_SECRET_KEY) secretOrKey: string,
    protected readonly staffService: StaffService
  ) {
    super(secretOrKey, staffService);
  }
}
