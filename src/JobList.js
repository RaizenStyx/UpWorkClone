import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Link } from "react-router-dom";

import { PRIMARY_GREEN } from "./StyledComponents";

export default function JobList({ jobs }) {
  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box key={job.id}>
            <Box sx={{ padding: "17px" }}>
              <Link style={{ textDecoration: "none" }} to={`/job/${job.id}`}>
                <Typography
                  sx={{ marginBottom: "15px", color: "black" }}
                  variant="h5"
                  component="div"
                >
                  {job.title}
                </Typography>
              </Link>

              <Typography variant="subtitle" gutterBottom component="div">
                Hourly ${job.hourlyUSD}
              </Typography>

              <Typography variant="subtitle" gutterBottom component="div">
                {job.postedTime}
              </Typography>

              <Typography variant="subtitle" gutterBottom component="div">
                <AddLocationIcon
                  sx={{
                    color: PRIMARY_GREEN,
                    marginLeft: "-10px",
                    marginRight: "3px",
                    fontSize: "14px"
                  }}
                />
                {job.remote ? "Remote, " : "Not Remote, "}
                {job.location}
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                sx={{ marginTop: "15px" }}
              >
                {job.description}
              </Typography>
            </Box>

            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
