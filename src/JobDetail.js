import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

import {
  MainBody,
  PRIMARY_GREEN,
  PrimaryButton,
  SecondButton,
  JobDetailBox
} from "./StyledComponents";

export default function JobDetail({ allJobs }) {
  let { id: idFromUrl } = useParams();

  const selectedJob = allJobs.find((job) => {
    return job.id === Number(idFromUrl);
  });

  return (
    <>
      <NavBar />
      <MainBody>
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            {selectedJob.title}
          </Typography>
          <Divider />
          <Box sx={{ padding: "20px 0" }}>
            <Typography
              sx={{ color: PRIMARY_GREEN }}
              variant="subtitle"
              gutterBottom
              component="div"
            >
              {selectedJob.category}
            </Typography>
            <Typography
              sx={{ fontWeight: 400 }}
              variant="subtitle"
              gutterBottom
              component="div"
            >
              Posted {selectedJob.postedTime}
            </Typography>
            <Typography variant="subtitle" gutterBottom component="div">
              <AddLocationIcon
                sx={{
                  color: PRIMARY_GREEN,
                  marginRight: "3px",
                  fontSize: "14px"
                }}
              />
              {selectedJob.remote ? "Remote, " : "Not Remote, "}
              {selectedJob.location}
            </Typography>
          </Box>
          <Divider />
          <Typography
            variant="body2"
            gutterBottom
            sx={{ margin: "20px 0", color: "#888B8E" }}
          >
            {selectedJob.description}
          </Typography>

          <Divider />
        </Box>
        <Box
          sx={{
            background: "white",
            width: "35%",
            borderRadius: "5px",
            height: "400px"
          }}
        >
          <JobDetailBox>
            <PrimaryButton
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "12px",
                width: "100%"
              }}
            >
              Submit A Proposal
            </PrimaryButton>

            <SecondButton
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "12px",
                width: "100%",
                marginTop: "10px"
              }}
            >
              <FavoriteBorder sx={{ marginRight: "3px" }} />
              Save a Job
            </SecondButton>
          </JobDetailBox>

          <Divider />

          <JobDetailBox>
            <Typography variant="subtitle" gutterBottom component="div">
              About The Client
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ margin: "10px 0", fontSize: "15px", color: "#888B8E" }}
            >
              {selectedJob.paymentVerified ? (
                <>
                  <CheckCircleOutlineIcon
                    fontSize="inherit"
                    sx={{ color: PRIMARY_GREEN, marginRight: "3px" }}
                  />
                  Payment Verifed
                </>
              ) : (
                <>Payment Not Verfied</>
              )}
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ margin: "10px 0", fontSize: "15px", color: "#888B8E" }}
            >
              <PinDropIcon
                fontSize="inherit"
                sx={{ color: PRIMARY_GREEN, marginRight: "3px" }}
              />
              {selectedJob.location}
            </Typography>
          </JobDetailBox>

          <Divider />

          <JobDetailBox>
            <Typography variant="subtitle" gutterBottom component="div">
              Job Link
            </Typography>
            <TextField
              disabled
              id="disabled"
              defaultValue="https://job-url.com"
              variant="standard"
            />
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                display: "block",
                fontSize: "12px",
                marginTop: "15px"
              }}
              color={PRIMARY_GREEN}
            >
              Copy Link
            </Link>
          </JobDetailBox>
        </Box>
      </MainBody>
    </>
  );
}
