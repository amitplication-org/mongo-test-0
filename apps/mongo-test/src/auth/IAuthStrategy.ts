import { StaffInfo } from "./StaffInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<StaffInfo>;
}
