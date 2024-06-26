import { useState } from "react";
import { setArray } from "../redux/Sort/sortSlice";
import { useAppDispatch } from "../redux/hooks/AppDispatch";
import generateArray from "../helpers/generateArray.ts";

const SnuffleForm = () => {
  const dispatch = useAppDispatch();

  const [length, setLength] = useState<number>(30);

  const handleArray = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(setArray(generateArray(length)));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLength(Number(e.currentTarget.value));
  };

  return (
    <form>
      <label>Длина массива:</label>
      <input type="text" placeholder="30" onChange={handleChange} />
      <button type="submit" onClick={handleArray}>
        Создать
      </button>
    </form>
  );
};

export default SnuffleForm;
