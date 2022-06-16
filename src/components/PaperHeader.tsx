import Typography from "@mui/material/Typography";

const PaperHeader = ({ title }: { title: string }) => (
  <Typography variant="subtitle2" component="h3" gutterBottom>
    {title}
  </Typography>
);

export default PaperHeader;
