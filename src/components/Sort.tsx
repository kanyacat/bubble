interface SortProps {
    array: number[]
}

const Sort = (props: SortProps) => {
  const {array} = props

    return (
    <div>
        {array.map((value, index) => (
            <div className='sort' key={index}
                style={{ height: `${value * 20 + 10}px`}}>
            </div>
        ))}
    </div>
)
}

export default Sort