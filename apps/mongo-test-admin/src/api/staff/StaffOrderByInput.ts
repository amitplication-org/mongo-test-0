import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instagramUrl?: SortOrder;
  linkedInUrl?: SortOrder;
  resumeUrl?: SortOrder;
  twitterUrl?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
