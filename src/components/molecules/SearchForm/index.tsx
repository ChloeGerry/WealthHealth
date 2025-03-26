import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SearchForm = () => {
  return (
    <form className="flex gap-4 items-left m-14 w-fit justify-self-end">
      <Label htmlFor="search" className="text-[#6A645A] text-base">
        Search:
      </Label>
      <Input
        id="search"
        className="max-w-52 border-[#C18845] focus:border-2 focus:border-[#F0BE86] rounded-sm"
      />
    </form>
  );
};

export default SearchForm;
