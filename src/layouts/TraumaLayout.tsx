import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import LinkTab from "../components/LinkTab";

import DashboardLayout from "./DashboardLayout";
import AssessmentLayout from "./AssessmentLayout";
import ComplaintBasedLayout from "./ComplaintBasedLayout";

export default function TraumaLayout({ children }: { children: ReactNode }) {
  const {
    route,
    query: { cid }
  } = useRouter();

  const routes = [
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/head`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/neck`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/chest`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/abdomen`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/pelvis`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/upper-extremities`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/lower-extremities`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/back`
  ];

  const [value, setValue] = React.useState(
    routes.indexOf(route.replace("[id]", cid as string))
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="trauma tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="Head" href={routes[0]} />
          <LinkTab label="Neck" href={routes[1]} />
          <LinkTab label="Chest" href={routes[2]} />
          <LinkTab label="Abdomen" href={routes[3]} />
          <LinkTab label="Pelvis" href={routes[4]} />
          <LinkTab label="Upper Extremities" href={routes[5]} />
          <LinkTab label="Lower Extremities" href={routes[6]} />
          <LinkTab label="Back" href={routes[7]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <AssessmentLayout>
      <ComplaintBasedLayout>
        <TraumaLayout>{page}</TraumaLayout>
      </ComplaintBasedLayout>
    </AssessmentLayout>
  </DashboardLayout>
);
