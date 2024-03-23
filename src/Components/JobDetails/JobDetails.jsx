import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";
import PropTypes from 'prop-types';


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id,job_description,job_responsibility,educational_requirements,experiences,salary,job_title,phone,email,address} = useParams()
    const job  = jobs.find(job => job.id == id)
   
    const handleApplyJob = () => {
        saveJobApplication(id)
        toast('Applied Successfully')
    }
    return (
        <div className="mx-32">
          <div className="flex gap-20">
          <div className="space-y-4 w-2/3 mt-14">
             <p><span className="font-bold text-xl">Job Description: </span><span className="text-md">{job.job_description}</span></p>
             <p><span className="font-bold text-xl">Job Responsibility: </span><span className="text-md">{job.job_responsibility}</span></p>
             <p><span className="font-bold text-xl">Educational Requirements:</span><br />{job.educational_requirements}</p>
             <p><span className="font-bold text-xl">Experiences:</span><br />{job.experiences}</p>
            </div>
            <div className="space-y-3 w-1/3 bg-slate-100 p-6 rounded-xl mt-6">
                <p className="text-xl font-semibold">Job Details</p>
                <hr />
                <div className="flex gap-2">
                <RiMoneyDollarCircleLine className="text-2xl" />
                <p>Salary: {job.salary} (Per Month)</p> 
                </div>
                <div className="flex gap-2">
                <MdOutlineSubtitles className="text-2xl" />
                <p>Job Title: {job.job_title} </p> 
           </div>
           <p className="text-xl font-semibold">Contact Information</p>
                <hr />
                <div className="flex gap-2">
                <FaPhoneAlt className="text-2xl" />
                <p>Phone: {job.contact_information.phone}</p> 
                </div>
                <div className="flex gap-2">
                <MdOutlineEmail className="text-2xl" />
                <p>Email: {job.contact_information.email}</p> 
                </div>
                <div className="flex gap-2">
                <CiLocationOn className="text-2xl" />
                <p>Phone: {job.contact_information.address}</p> 
                </div>

                <button onClick={handleApplyJob} className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white w-full">Apply Now</button>

            </div>
            
          </div>
          <ToastContainer />
        </div>
    );
    
};
JobDetails.propTypes = {
    jobs: PropTypes.array,
};

export default JobDetails;