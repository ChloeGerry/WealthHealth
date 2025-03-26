import Header from "@/components/molecules/Header";
import EmployeesContainer from "@/components/organisms/EmployeesContainer";
import { ROUTES } from "@/utils/routes";

const Employees = () => {
  return (
    <>
      <Header
        headerClassName="grid grid-cols-4 mt-4 mx-8"
        to={ROUTES.DASHBOARD}
        text="HRnet"
        title="Current Employees"
        navigationClassName="text-3xl text-[#5D7052]"
        mainTitleClassName="col-span-2 justify-self-center text-[#6A645A]"
      />
      <EmployeesContainer />
    </>
  );
};

export default Employees;
