import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <div className="mx-40 mt-20">
            <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;