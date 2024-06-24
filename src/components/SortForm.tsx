import { useState } from "react"
import bubbleSort from "../helpers/BubbleSort"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { setArray } from "../redux/sortSlice"

// interface SortFormProps {
//     array: number[]
//   setArray: React.Dispatch<React.SetStateAction<number[]>>
// }

const SortForm = () => {
 

  const array = useSelector((state: RootState) => state.sort.array)
  const [duration, setDuration] = useState<number>(100)
  const dispatch = useDispatch()

  const handleSort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    bubbleSort(array, dispatch(setArray), duration)
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