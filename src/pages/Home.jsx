import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import MainNavigation from "../components/MainNavigation/MainNavigation";

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <MainContent />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
