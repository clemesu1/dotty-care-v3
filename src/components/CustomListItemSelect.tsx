import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";

export default function CustomListItemSelect({
  label,
  options
}: {
  label: string;
  options: string[];
}) {
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string
  ) => {
    setSelectedItem(item);
  };

  return (
    <List
      dense
      subheader={<ListSubheader>{label}</ListSubheader>}
      component={Paper}
      variant="outlined"
    >
      {options.map((item) => (
        <ListItemButton
          key={item}
          selected={selectedItem === item}
          onClick={(event) => handleListItemClick(event, item)}
        >
          <ListItemText primary={item} />
        </ListItemButton>
      ))}
    </List>
  );
}
