import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
// import ProductCarousel from "../components/ProductGrid";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { AdminNavbar } from "../components/admin/adminNavbar";
import { BrandList } from "../components/admin/brandList";
import { CustomerList } from "../components/admin/CustomerList";
import UserDetailsForm from "../components/admin/userDetails";
import AdminFlow from "../components/admin/adminFlow";
import MainHeroBanner from "../components/MainBanner";
import CardSlider from "../components/banerslider";
import ActivityContainer from "../components/ActivityContainer";



export default function HomePage() {
  return (
    <>
    {/* <AdminNavbar/> */}
    {/* <BrandList/> */}
    {/* <CustomerList/> */}
    {/* <UserDetailsForm/> */}
    {/* <AdminFlow/> */}
      <Navbar />
      <HeroBanner />
      <CategorySection />
      <MainHeroBanner/>
      <CardSlider/>
      

      {/* 9 product carousels */}
      {/* <ProductCarousel title="Fashion & Life Style" />
      <ProductCarousel title="Sports" />
      <ProductCarousel title="Home Appliance & Electronics" />
      <ProductCarousel title="Home Decor" />
      <ProductCarousel title="Beauty & Personal Care" />
      <ProductCarousel title="Toys & Games" />
      <ProductCarousel title="Books & Stationery" />
      <ProductCarousel title="Groceries" />
      <ProductCarousel title="Automotive" /> */}

<ProductGrid/>
      <ActivityContainer />

      <Footer />
    </>
  );
}
