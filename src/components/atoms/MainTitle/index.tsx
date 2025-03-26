import { twMerge } from "tailwind-merge";

type MainTitleProps = {
  title: string;
  className?: string;
};

const MainTitle = ({ title, className }: MainTitleProps) => {
  return <h1 className={twMerge("text-3xl", className)}>{title}</h1>;
};

export default MainTitle;
