import { useState } from "react"
import bubbleSort from "../helpers/BubbleSort"

interface SortFormProps {
    array: number[]
  setArray: React.Dispatch<React.SetStateAction<number[]>>
}

const SortForm = (props: SortFormProps) => {
  const {array, setArray} = props
  const [duration, setDuration] = useState<number>(100)

  const handleSort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    bubbleSort(array, setArray, duration)
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