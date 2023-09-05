import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "username";

export const StaffTitle = (record: TStaff): string => {
  return record.username || String(record.id);
};
