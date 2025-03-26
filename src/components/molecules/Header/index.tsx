import MainTitle from "@/components/atoms/MainTitle";
import Navigation from "@/components/atoms/Navigation";

type HeaderProps = {
  to: string;
  text: string;
  title: string;
  headerClassName?: string;
  navigationClassName?: string;
  mainTitleClassName?: string;
};

const Header = ({
  headerClassName,
  to,
  text,
  title,
  navigationClassName,
  mainTitleClassName,
}: HeaderProps) => {
  return (
    <header className={headerClassName}>
      <Navigation to={to} text={text} className={navigationClassName} />
      <MainTitle title={title} className={mainTitleClassName} />
    </header>
  );
};

export default Header;
