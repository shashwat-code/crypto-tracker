import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
  } from "@mui/material";
  
  function DevelopersDataModule({ score, data }) {
    // console.log(data);
    return (
      <Grid item> 
        <Card elevation={7}>
          <CardHeader title="Developers Score" subheader="github repository stats" />
          <CardContent>
            <Typography variant="h4">SCORE: {score.toFixed(2)}</Typography>
            <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Stars:</span>{" "}
              <span>
                {data.stars ? data.stars : "Not Found"}
              </span>
            </Typography>
            <Divider />
            <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Forks:</span>{" "}
              <span>
                {data.forks !== null
                  ? data.forks
                  : "Not Found"}
              </span>
            </Typography>
            <Divider />
            <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Closed Issues: </span>{" "}
              <span>
                {data.closed_issues ? data.closed_issues : "Not Found"}
              </span>
            </Typography>
            <Divider />
          </CardContent>
        </Card>
      </Grid>
    );
  }
  export default DevelopersDataModule;


// developer_data:
// closed_issues: 1116
// code_additions_deletions_4_weeks: {additions: 1621, deletions: -183}
// commit_count_4_weeks: 51
// forks: 965
// last_4_weeks_commit_activity_series: (28) [0, 2, 0, 1, 10, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 1, 3, 0, 0, 0, 2, 0, 0, 1, 0]
// pull_request_contributors: 71
// pull_requests_merged: 1171
// stars: 2938
// subscribers: 278
// total_issues: 1322
// [[Prototype]]: Object
// developer_score: 87.383