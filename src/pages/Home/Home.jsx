import Header from "../../components/Home/Header";
import About from "../../components/Home/About";
import PopularItem from "../../components/Home/PopularItem";
import BookTable from "../../components/Home/BookTable";
import Testimonial from "../../components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <PopularItem />
      <BookTable />
      <Testimonial />
    </>
  );
};

export default Home;
