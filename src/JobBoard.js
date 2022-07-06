import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState } from "react";

import NavBar from "./NavBar";
import CatMenu from "./CatMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const [selectedCat, setSelectedCat] = useState("");
  const catagories = [];

  for (let job of allJobs) {
    if (!catagories.includes(job.category)) {
      catagories.push(job.category);
    }
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: "50px 10%",
          height: "500px",
          display: "flex",
          textAlign: "left"
        }}
      >
        <Box sx={{ width: "30%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            Find Work
          </Typography>

          <Typography variant="h6" component="div">
            Categories
          </Typography>
          <CatMenu
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
            catagories={catagories}
          />
        </Box>

        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => job.category === selectedCat)}
          />
        </Box>
      </Box>
    </>
  );
}
