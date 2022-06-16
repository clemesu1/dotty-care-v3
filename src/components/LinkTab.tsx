import * as React from "react";
import { useRouter } from "next/router";
import Tab from "@mui/material/Tab";
import Link from "./Link";

interface LinkTabProps {
  label?: string;
  href: string;
}

export default function LinkTab(props: LinkTabProps) {
  const router = useRouter();

  return (
    <Tab
      component={Link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(props.href);
      }}
      {...props}
    />
  );
}
