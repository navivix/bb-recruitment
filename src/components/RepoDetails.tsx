import React, { useState } from "react";
import { Grid, Typography, Tabs, Tab, Box } from "@mui/material";
import type { RepoWithData } from "../types";
import CommitLoader from "./CommitLoader";
import IssueLoader from "./IssueLoader";
import ReleaseLoader from "./ReleaseLoader";

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
  repo: RepoWithData;
  owner: string;
  name: string;
}

export default function RepoDetails({ repo, owner, name }: RepoDetailsProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">{repo.nameWithOwner}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{repo.description}</Typography>
      </Grid>
      <Grid item>
        <Tabs value={tab} onChange={handleChange}>
          <Tab
            label={`Commits ${repo.defaultBranchRef.target.history.totalCount}`}
          />
          <Tab label={`Issues ${repo.issues.totalCount}`} />
          <Tab label={`Releases ${repo.releases.totalCount}`} />
        </Tabs>
      </Grid>
      <Grid item>
        <TabPanel value={tab} index={0}>
          <CommitLoader owner={owner} name={name} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <IssueLoader owner={owner} name={name} />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <ReleaseLoader owner={owner} name={name} />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
