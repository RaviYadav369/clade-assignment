import Footer from "@/components/Footer";
import JobPreview from "@/components/JobDetails";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <JobPreview />
        </div>
        <div className="col-span-3">
          <RightSideBar />
        </div>
        <div className="col-span-9">

          <Footer />
        </div>
      </div>

    </>
  );
}
