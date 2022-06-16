import prisma from "../../utils/prisma";
import { getLayout } from "../../src/layouts/SiteLayout";
import Link from "../../src/components/Link";
import { GetServerSideProps } from "next";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function CallTransactions({ callTransactions }) {
  return (
    <Grid container spacing={2}>
      {JSON.parse(callTransactions).map((call) => (
        <Grid key={call.id} item xs={12} sm={6} lg={4}>
          <Card>
            <CardActionArea
              component={Link}
              href={`/dashboard/${call.id}/call-details/vehicle-details`}
            >
              <CardHeader
                title={
                  <Typography gutterBottom variant="subtitle2" component="div">
                    Call ID: {call.id}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="text.secondary">
                    {new Date(call.createdAt).toLocaleString()}
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Vehicle ID: {call.vehicleId}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Driver ID: {call.driverId}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vehicle Status: {call.vehicleStatus}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const callTransactions = await prisma.callTransaction.findMany();

  return {
    props: {
      callTransactions: JSON.stringify(callTransactions)
    }
  };
};

CallTransactions.getLayout = getLayout;
