import React, { useState } from "react";
import { Grid, Typography, Tabs, Tab, Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

interface RepoDetailsProps {
  repo: any;
}

export default function RepoDetails({ repo }: RepoDetailsProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Name</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">Description</Typography>
      </Grid>
      <Grid item>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Commits 0" />
          <Tab label="Issues 0" />
          <Tab label="Releases 0" />
        </Tabs>
      </Grid>
      <Grid item>
        <TabPanel value={tab} index={0}>
          commits
        </TabPanel>
        <TabPanel value={tab} index={1}>
          issues
        </TabPanel>
        <TabPanel value={tab} index={2}>
          releases
        </TabPanel>
      </Grid>
    </Grid>
  );
}
