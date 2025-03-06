import React from "react";
import { useRouter } from 'next/navigation';

const JobList = ({ jobs }) => {
  const router = useRouter();
  
  const handleNavigation = (jobId) => {
    router.push(`/${jobId}`);
    console.log(`Navigating to: /${jobId}`);
  };
  return (
    <main className="mx-auto py-12 " >
  <div class="flex items-center space-x-2" style={{marginBottom:"2%"}}>
    <span class="text-black text-xl font-semibold">Latest Jobs</span>
    <div class="w-2/4 h-1 bg-blue-500"></div>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-300 w-full h-auto cursor-pointer overflow-hidden"
          onClick={() => handleNavigation(job._id)}
        >

          <div className="flex items-start justify-between">
            {/* Left Section: Image and Text */}
            <div className="flex items-center gap-4">
              <img
                src={job.image}
                alt={job.title}
                className="h-16 w-16 rounded-lg object-cover border border-gray-400 flex-shrink-0"
              />
              {/* Title and Company Info */}
              <div className="flex flex-col min-w-0">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 break-words">
                  {job.title}  
                </h3>
                <p className="text-md text-gray-600 line-clamp-1">{job.company}</p>
              </div>
            </div>
            {/* Right Section: Job Type Badge */}
            <span className="text-sm px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold whitespace-nowrap flex-shrink-0">
              {job.type}
            </span>
          </div>
  
          <p className="text-gray-800 text-md line-clamp-3 mt-4">{job.description}</p>
  
          <div className="flex items-center justify-between pt-6">
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
              {job.salary}
            </span>
            <button className="border border-gray-400 px-5 py-2 rounded-lg text-md font-semibold text-blue-700 hover:bg-blue-100 transition whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </main>
  );
};

export default JobList;
