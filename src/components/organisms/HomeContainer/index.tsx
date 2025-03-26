import Navigation from "@/components/atoms/Navigation";
import Form from "@/components/molecules/Form";
import { ROUTES } from "@/utils/routes";

const HomeContainer = () => {
  return (
    <>
      <Navigation
        to={ROUTES.EMPLOYEES}
        text="Current Employees"
        className="text-[#6A645A] ml-8 text-base"
      />
      <Form
        formClassName="flex flex-col gap-4 items-left m-14 w-fit justify-self-center"
        labelClassName="text-[#6A645A] text-base"
        inputClassName="max-w-52 border-[#C18845] focus:border-2 focus:border-[#F0BE86] rounded-sm"
        buttonLabel="Save"
      />
    </>
  );
};

export default HomeContainer;
