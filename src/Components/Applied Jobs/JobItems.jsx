import { IoLocationOutline} from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const JobItems = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,id} = job
    return (
      <div className="flex justify-between border-2 mb-10 rounded-xl p-8 shadow-xl">
          <div>
         <div className="flex gap-10">
         <div className="mt-8">
          <figure><img src={logo} className="h-14" width='100px' /></figure>
          </div>

          <div className="space-y-4">
          <h1>{job_title}</h1>
          <h1>{company_name}</h1>
          <div className="flex gap-3">
      <span className="border-2 border-purple-300 p-1 text-purple-600  text-lg">{remote_or_onsite}</span>
      <span className="border-2 border-purple-300 p-1 text-purple-600  text-lg">{job_type}</span>
    </div>
    <div className="flex gap-8">
      <div className="flex gap-2"><IoLocationOutline className="mt-1" />
      <span>{location}</span>
      </div>

      <div className="flex gap-2"><RiMoneyDollarCircleLine className="mt-1" />
      <span>{salary}</span>
      </div>
      
      
    </div>
          </div>
         </div>

        </div>
        <div className="flex items-center">
        <button className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white">View Details</button>
        </div>
      </div>
    );
};

export default JobItems;