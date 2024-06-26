import { useAppSelector } from "../redux/hooks/AppSelector";
import { RootState } from "../redux/store";

const Sort = () => {
  const array = useAppSelector((state: RootState) => state.sort.array);

  return (
    <div>
      {array.map((value, index) => (
        <div
          className="sort"
          key={index}
          style={{ height: `${value * 20 + 10}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Sort;
