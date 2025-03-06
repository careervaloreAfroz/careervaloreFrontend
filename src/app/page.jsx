"use client"
import React, { useState, useEffect } from "react";
import JobGrid from '../components/JobGrid'
import ArticleCard from '../components/ArticleCard'
import ArticleGrid from '../components/ArticleGrid'
import { Grid, Box } from '@mui/material';
import Secondsection from '@/components/Secondsection'
import JobSearch from "@/components/JobSearch"
import JobDiv2 from "@/components/JobDiv2"
import Footer from "@/components/Footer"

import dotenv  from "dotenv"

function Temp() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
    return (
    <>
  <div className="px-2 md:px-10">
  {/* <JobSearch/> */}
    <JobGrid/>
    {/* <ArticleCard/> */} 
     <div>
      {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <JobDiv2 jobs={jobs} />}
    </div>  
    <div class="flex items-center space-x-2" style={{marginBottom:"2%"}}>
    <span class="text-black text-xl font-semibold">Latest Jobs</span>
    <div class="w-2/4 h-1 bg-blue-500"></div>
  </div>
      <div>
          <ArticleGrid/>
    </div>
{/* <div>
<Secondsection/>
</div> */}
</div>

    </>
  )
}

export default Temp