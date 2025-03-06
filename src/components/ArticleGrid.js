"use client";

import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

const JobGrid = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Handle navigation to a specific job details page
  const handleNavigation = (jobId) => {
    router.push(`/${jobId}`);
  };

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [token]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {jobs.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job._id}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            onClick={() => handleNavigation(job._id)}
          >
            {/* Text Section */}
            <CardContent
              sx={{
                flex: "2 1 0", // Takes 2 parts of available space
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  lineHeight: 1.2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal", // Allows wrapping
                  wordBreak: "break-word",
                }}
              >
                {job.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal", // Allows wrapping
                  wordBreak: "break-word",
                }}
              >
                {job.company}
              </Typography>
            </CardContent>

            {/* Image Section */}
            <CardMedia
              component="img"
              image={job.image}
              alt={job.title}
              sx={{
                flex: "1 1 0", // Takes 1 part of available space
                width: { xs: 100, sm: 120, md: 140 }, // Responsive width
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobGrid;



// import React from 'react';
// import { Grid, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

// const articles = [
//   {
//     title: "What is seed funding and how does it differ from Series...",
//     date: "December 2, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",

//   },
//   {
//     title: "Startup Funding: Exploring Different Sources of Capital",
//     date: "November 30, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "AMUL ICE CREAM PARLOUR BUSINESS FRANCHISE",
//     date: "June 29, 2022",
//     image:"https://th.bing.com/th/id/OIP.AZJttRuonl0ra5TGWMXV8AHaFj?rs=1&pid=ImgDetMain",
// },
//   {
//     title: "Frontlines Media – Startup Connect",
//     date: "May 23, 2021",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "HOW TO START A MEDICAL SHOP (PHARMACY) IN INDIA",
//     date: "April 23, 2021",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "Business Incubator vs. Accelerator: How to Unlock the Power of Your...",
//     date: "November 30, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
// ];

// const ArticleGrid = () => {
//   return (
//     <Grid container spacing={2} sx={{ padding: 2 }}>
//       {articles.map((article, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
//             <CardContent sx={{ flex: 1 }}>
//               <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
//                 {article.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {article.date}
//               </Typography>
//             </CardContent>
//             <CardMedia
//               component="img"
//               height="140"
//               image={article.image}
//               alt={article.title}
//               sx={{ width: 140 }}
//             />
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ArticleGrid;
