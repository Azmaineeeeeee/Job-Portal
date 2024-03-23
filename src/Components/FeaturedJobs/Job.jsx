import { IoLocationOutline} from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,id} = job
    return (
        <div className="border-2 p-2 mt-6 border-dashed">
           <div className="rounded-xl p-4 shadow-xl">
  <figure><img src={logo} className="h-12" width='100px' /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-3">
      <span className="border-2 border-purple-300 p-2 text-purple-600 w-1/4 text-lg">{remote_or_onsite}</span>
      <span className="border-2 border-purple-300 p-2 text-purple-600 w-1/4 text-lg">{job_type}</span>
    </div>
    <div className="flex gap-8">
      <div className="flex gap-2"><IoLocationOutline className="mt-1" />
      <span>{location}</span>
      </div>

      <div className="flex gap-2"><RiMoneyDollarCircleLine className="mt-1" />
      <span>{salary}</span>
      </div>
      
      
    </div>
    <Link to={`/job/${id}`}>
    <button className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white w-1/4">View Details</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Job;