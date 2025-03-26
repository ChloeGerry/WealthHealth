import Header from "@/components/molecules/Header";
import HomeContainer from "@/components/organisms/HomeContainer";
import { ROUTES } from "@/utils/routes";

const Home = () => {
  return (
    <>
      <Header
        headerClassName="grid grid-cols-4 mt-4 mx-8"
        to={ROUTES.DASHBOARD}
        text="HRnet"
        title="Create Employee"
        navigationClassName="text-3xl text-[#5D7052]"
        mainTitleClassName="col-span-2 justify-self-center text-[#6A645A]"
      />
      <HomeContainer />
    </>
  );
};

export default Home;
