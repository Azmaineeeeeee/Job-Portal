import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4)

    useEffect(() => {
        fetch('../../../public/Data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const showAllJobs = () => {
        setDataLength(jobs.length); 
    };

    return (
        <div>
          <h3 className="text-3xl text-center font-bold mt-6">Featured Jobs</h3>
           <p className="text-center">Here you can see all the job openings by your own.</p>
        <div className="grid grid-cols-2 gap-6">
            
            {jobs.slice(0,dataLength).map(job => (
                <Job key={job.id} job={job} />
            ))}
        </div>
       
        <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center'}>
                <button onClick={showAllJobs} className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white mt-6">Show All Jobs</button>
            </div>
        
        </div>
    );
};

export default FeaturedJobs;


