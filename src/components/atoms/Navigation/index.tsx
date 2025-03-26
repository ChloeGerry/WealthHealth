import { Link } from "react-router-dom";

type NavigationProps = {
  to: string;
  text: string;
  className?: string;
};

const Navigation = ({ to, text, className }: NavigationProps) => {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

export default Navigation;
