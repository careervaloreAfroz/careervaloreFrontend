"use client";
import { useEffect, useState } from "react";
import { Grid, Box, Typography, Link, CircularProgress } from "@mui/material"; // Added CircularProgress
import { fetchCardDetails } from "../../utils/apicall";
import { endpoints } from "../../../endpoints";
import { use } from "react"; // Unwrapping the Promise from `params`
import JobDetailsContent from "../../components/JobDetailsContent";

export default function JobDetails({ params }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = use(params); // Unwrapping the `params` Promise
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Handle token for SSR
  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const response = await fetchCardDetails(
          `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`,
          "GET",
          token
        );
        if (!response) throw new Error("Failed to fetch job details");
        setJob(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [id, token]); // Added dependencies to useEffect

  // Loading state with CircularProgress
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Full viewport height to center the loader
        }}
      >
        <CircularProgress /> {/* Material-UI spinner */}
        <Typography sx={{ ml: 2 }}>Loading...</Typography> {/* Optional text */}
      </Box>
    );
  }  // Error state
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }
  return (
    <Grid container spacing={2}>
      {/* First column */}
      <Grid item xs={0} sm={12} md={1}>
        <Box
          sx={{
            height: "200px",
            width: "100%",
            backgroundColor: "lightblue",
            display: { xs: "none", sm: "block" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Column 1 */}
        </Box>
      </Grid>

      {/* Middle column */}
      {/* <Grid item xs={12} sm={12} md={8}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "#ebf0eb",
            p: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "95%",
              height: "300px",
              backgroundColor: "black",
              margin: "auto",
              backgroundImage: `url(${job.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          ></Box>

          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: 3,
              borderRadius: 2,
              p: 4,
              mt: 4,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              textAlign="center"
              sx={{ mb: 3 }}
            >
              {job.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
              sx={{ mb: 4 }}
            >
              {job.description}
            </Typography>

            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="error"
                sx={{ mb: 2 }}
              >
                Company: {job.company}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Location: {job.location}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Salary: {job.salary}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Sector: {job.sector}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Job Type: {job.type}
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Application Deadline:{" "}
                {new Date(job.applicationDeadline).toLocaleDateString()}
              </Typography>

              <Typography variant="h6" sx={{ mb: 2 }}>
                Requirements:
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 2,
                  mb: 3,
                  listStyle: "disc",
                  color: "text.primary",
                  typography: "body2",
                }}
              >
                {job.requirements.map((requirement, index) => (
                  <li key={index} style={{ marginTop: "15px" }}>
                    {requirement}
                  </li>
                ))}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  component="a"
                  href="#"
                  variant="button"
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: "red",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Apply Now <span style={{ color: "black" }}>(Before Deadline)</span>
                </Typography>

                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ mt: 2, display: "block" }}
                >
                  Join Our Telegram Group (1.9 Lakhs+ members):{" "}
                  <Link href="#" color="primary">
                    Click Here To Join
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ mt: 1, display: "block" }}
                >
                  For Job Updates Follow –{" "}
                  <Link href="#" color="primary">
                    FLM Pro Network – Instagram Page
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid> */}
 {/* Middle column */}
 <Grid item xs={12} sm={12} md={10}>
        {job && <JobDetailsContent job={job} />}
      </Grid>


      {/* Third column */}
      <Grid item xs={0} sm={12} md={1}>
        <Box
          sx={{
            height: "200px",
            width: "100%",

            backgroundColor: "lightcoral",
            display: { xs: "none", sm: "block" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Column 3 */}
        </Box>
      </Grid>
    </Grid>
  );
}
