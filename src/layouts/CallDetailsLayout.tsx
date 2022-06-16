import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import DashboardLayout from "./DashboardLayout";
import LinkTab from "../components/LinkTab";

export default function CallDetailsLayout({
  children
}: {
  children: ReactNode;
}) {
  const { route, query } = useRouter();
  const { cid } = query;

  const routes = [
    `/dashboard/${cid}/call-details/vehicle-details`,
    `/dashboard/${cid}/call-details/patient-details`,
    `/dashboard/${cid}/call-details/incident-details`
  ];

  const [value, setValue] = React.useState(
    routes.indexOf(route.replace("[cid]", cid as string))
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
          aria-label="call details tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="Vehicle Details" href={routes[0]} />
          <LinkTab label="Patient Details" href={routes[1]} />
          <LinkTab label="Incident Details" href={routes[2]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3, px: 2 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <CallDetailsLayout>{page}</CallDetailsLayout>
  </DashboardLayout>
);
