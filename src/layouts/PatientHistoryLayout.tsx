import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import { chiefComplaints } from "../components/listItems";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DashboardLayout from "./DashboardLayout";
import AssessmentLayout from "./AssessmentLayout";
import LinkTab from "../components/LinkTab";

export default function PatientHistoryLayout({
  children
}: {
  children: ReactNode;
}) {
  const { route, query } = useRouter();
  const { cid } = query;

  const routes: string[] = [
    `/dashboard/${cid}/assessment/patient-history/general`,
    `/dashboard/${cid}/assessment/patient-history/allergies`,
    `/dashboard/${cid}/assessment/patient-history/medications`,
    `/dashboard/${cid}/assessment/patient-history/last-meal`,
    `/dashboard/${cid}/assessment/patient-history/events-prior`,
    `/dashboard/${cid}/assessment/patient-history/past-history`
  ];

  const [value, setValue] = React.useState(
    routes.indexOf(route.replace("[cid]", cid as string))
  );
  const [complaint, setComplaint] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleComplaintChange = (event: SelectChangeEvent) => {
    setComplaint(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth size="small" sx={{ mb: 1 }}>
        <InputLabel id="chief-complaint-select-label">
          Chief Complaint
        </InputLabel>
        <Select
          labelId="chief-complaint-select-label"
          id="chief-complaint-select"
          value={complaint}
          label="Chief Complaint"
          onChange={handleComplaintChange}
        >
          {chiefComplaints.map((complaint) => (
            <MenuItem key={complaint} value={complaint.toLowerCase()}>
              {complaint}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="call details tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="General" href={routes[0]} />
          <LinkTab label="Allergies" href={routes[1]} />
          <LinkTab label="Medications" href={routes[2]} />
          <LinkTab label="Last Meal" href={routes[3]} />
          <LinkTab label="Events Prior" href={routes[4]} />
          <LinkTab label="Past History" href={routes[5]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3, px: 2 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <AssessmentLayout>
      <PatientHistoryLayout>{page}</PatientHistoryLayout>
    </AssessmentLayout>
  </DashboardLayout>
);
