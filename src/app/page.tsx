import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="grow flex">
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
