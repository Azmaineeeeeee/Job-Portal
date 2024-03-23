import image from "../../assets/assets/images/user.png";
const Banner = () => {
  return (
    <div className="flex justify-evenly mx-20">
      <div className="mt-6">
        <h3 className="text-5xl">
          One Step <br /> Closer To Your <br />
          <span className="text-violet-500">Dream Job</span>
        </h3>
        <p className="text-sm mt-4">
          A job portal serves as a pivotal bridge between job seekers and
          employers, facilitating <br /> the process of recruitment and career
          advancement. <br /> It acts as a centralized platform where
          individuals can explore a myriad of employment opportunities.
        </p>
        <button className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white mt-4">
          Get Started
        </button>
      </div>
      <img
        src={image}
        className="w-[600px] h-[400px] mr-8 border-2 border-dashed border-slate-300 p-4"
      ></img>
    </div>
  );
};

export default Banner;
