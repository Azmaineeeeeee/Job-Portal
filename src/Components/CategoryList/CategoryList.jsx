import icons from '../../assets/assets/icons/marketing.png'
const CategoryList = () => {
    return (
        <div className="mt-10 mx-32">
            <h3 className="text-3xl text-center font-bold">Job Category List</h3>
            <p className="text-center">Here you can see all the job openings by your own.</p>
            <div className='flex justify-evenly mt-5'>
                <div className='space-y-3 bg-slate-100 p-4 rounded-xl'>
                  <img src={icons}></img>
                  <h1 className='font-bold text-xl'>Account and Finance</h1>
                  <p className='font-semibold text-md'>300 Jobs Available</p>
                </div>
                <div className='space-y-3 bg-slate-100 p-4 rounded-xl'>
                  <img src={icons}></img>
                  <h1 className='font-bold text-xl'>Engineering Jobs</h1>
                  <p className='font-semibold text-md'>100 Jobs Available</p>
                </div>
                <div className='space-y-3 bg-slate-100 p-4 rounded-xl'>
                  <img src={icons}></img>
                  <h1 className='font-bold text-xl'>Marketing and Sales</h1>
                  <p className='font-semibold text-md'>200 Jobs Available</p>
                </div>
                <div className='space-y-3 bg-slate-100 p-4 rounded-xl'>
                  <img src={icons}></img>
                  <h1 className='font-bold text-xl'>Creative Design Jobs</h1>
                  <p className='font-semibold text-md'>100 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;