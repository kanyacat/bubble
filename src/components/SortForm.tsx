import { useState } from "react"
import { RootState } from "../redux/store"
import { setArray } from "../redux/Sort/sortSlice"
import { useAppSelector } from "../redux/hooks/AppSelector"
import { useAppDispatch } from "../redux/hooks/AppDispatch"

const SortForm = () => {
 
  const array = useAppSelector((state: RootState) => state.sort.array)
  const [duration, setDuration] = useState<number>(100)
  const dispatch = useAppDispatch()

  const handleSort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

      const newArr = [...array];
      for (let i = 0; i < newArr.length; i++) {
          for (let j = 0; j < newArr.length - i - 1; j++) {
              setTimeout(() => {
                  if (newArr[j] > newArr[j + 1]) {
                      const temp = newArr[j];
                      newArr[j] = newArr[j + 1];
                      newArr[j + 1] = temp;
                      dispatch(setArray([...newArr]));
                  }
              }, duration * (i + 1));
          }
      }
    }

    return  (
    <form>
      <label>
          Скорость сортировки в ms: 
      </label>
        <input type="text"  
        placeholder='100'
        onChange={(e) => setDuration(Number(e.target.value))} />
        <button 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSort(e)}
        >
          Отсортировать
        </button>
    </form>
    )
}

export default SortForm