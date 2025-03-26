import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createEmployeeForm } from "@/utils/createEmployeeForm";

type FormProps = {
  formClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  buttonLabel: string;
};

const Form = ({ formClassName, labelClassName, inputClassName, buttonLabel }: FormProps) => {
  return (
    <form className={formClassName}>
      {createEmployeeForm.map(({ value, htmlFor }) => (
        <div key={value} className="flex flex-col gap-2">
          <Label htmlFor={htmlFor} className={labelClassName}>
            {value}
          </Label>
          <Input id={htmlFor} className={inputClassName} />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <Label htmlFor="zipCode" className={labelClassName}>
          Zip Code
        </Label>
        <Input id="zipCode" className={inputClassName} />
      </div>
      <Button className="bg-[#E3CD8B] cursor-pointer">{buttonLabel}</Button>
    </form>
  );
};

export default Form;
