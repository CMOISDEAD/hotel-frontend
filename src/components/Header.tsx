import { RxDashboard } from "react-icons/rx";

type Props = {
  content: string;
};

export const Header = ({ content }: Props) => {
  return (
    <h3 className="my-3 inline-flex content-center items-center gap-2 text-3xl font-bold capitalize">
      <RxDashboard />
      {content}
    </h3>
  );
};
