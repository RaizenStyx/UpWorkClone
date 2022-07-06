import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

import { MainBody } from "./StyledComponents";

export default function JobDetail({ allJobs }) {
  let { id: idFromUrl } = useParams();

  const selectedJob = allJobs.find((job) => {
    return job.id === Number(idFromUrl);
  });

  return (
    <>
      <NavBar />
      <MainBody>
        <Box sx={{ background: "blue" }}></Box>
        <Box sx={{ background: "green" }}></Box>
      </MainBody>
    </>
  );
}
