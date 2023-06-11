import { FaSearch } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

interface Props {
  value: string | number | readonly string[] | undefined;
  changeValue: Function;
}

interface IconProps {
  iconProps: IconBaseProps;
}

function SearchInput({ value, changeValue }: Props, iconProps: IconProps) {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 mt-3 ml-3 text-white">
        <FaSearch {...iconProps.iconProps} />
      </div>
      <input
        type="text"
        className=" text-white text-base px-3 py-2 bg-[#131823] pl-9 font-helvetica-neue outline-none rounded-md w-full shadow-sm border-[#5B6178] border placeholder-[#737992]"
        placeholder="Search cousine"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
