import { Field, ObjectType } from "@nestjs/graphql";
import { Staff } from "../staff/base/Staff";

@ObjectType()
export class StaffInfo implements Partial<Staff> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
