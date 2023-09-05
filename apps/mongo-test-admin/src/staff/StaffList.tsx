import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StaffList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Staffs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InstagramUrl" source="instagramUrl" />
        <TextField label="LinkedInUrl" source="linkedInUrl" />
        <TextField label="ResumeUrl" source="resumeUrl" />
        <TextField label="TwitterUrl" source="twitterUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
      </Datagrid>
    </List>
  );
};
