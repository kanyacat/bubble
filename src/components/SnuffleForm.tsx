import {  useState } from "react"
import generateArray from "../helpers/GenerateArray"
import { setArray } from "../redux/Sort/sortSlice"
import { useAppDispatch } from "../redux/hooks/AppDispatch"

const SnuffleForm = () => {
  const dispatch = useAppDispatch()

    const [length, setLength] = useState<number>(30)
    

    const handleArray = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setArray(generateArray(length)))
      }
    
    return (
    <form>
      <label>
        Длина массива: 
      </label>
      <input type="text" 
      placeholder="30"
      onChange={(e) => setLength(Number(e.target.value))} />
      <button type='submit' 
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleArray(e)}
      >
      Создать
      </button>
  </form>
  )
}

export default SnuffleForm