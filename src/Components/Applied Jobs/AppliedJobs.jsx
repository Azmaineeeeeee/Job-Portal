import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import JobItems from "./JobItems";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs,setAppliedJobs] = useState([])
    const [displayJobs,setDisplayJobs] = useState([])

const handleJobsFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    }
    else if(filter === 'remote'){
        const remoteJobs = displayJobs.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs = displayJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs) 
    }
}


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        const jobsApplied = []
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id == id)
            if(job){
                jobsApplied.push(job)
            }
        }
        setAppliedJobs(jobsApplied)
        setDisplayJobs(jobsApplied)
    },[jobs])
  
       console.log(appliedJobs);
        
    return (
        
       <div>
        <details className="dropdown">
  <summary className="m-1 btn">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box">
    <li onClick={() => {handleJobsFilter('remote')}}><a>Remote</a></li>
    <li onClick={() => {handleJobsFilter('onsite')}}><a>Onsite</a></li>
    <li onClick={() => {handleJobsFilter('all')}}><a>All</a></li>
  </ul>
</details>
         <div className="mx-20 mt-10">
          {
            displayJobs.map(job => 
                <JobItems key={job.id} job = {job}></JobItems>
            )
          }
        </div>
       </div>
    );
};

export default AppliedJobs;