import Header from '../components/Companies/Header';
import Info from '../components/Companies/Info';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import Partners from '../components/Companies/Partners';

const Companies = () => (
  <>
    <Header />
    <Info />
    <FeaturedProjects divider="border-top-light-gray" />
    <Partners />
  </>
);

export default Companies;