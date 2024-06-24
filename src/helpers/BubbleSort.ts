const bubbleSort = (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, duration: number) => {
    const newArr = [...array];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            setTimeout(() => {
                if (newArr[j] > newArr[j + 1]) {
                    const temp = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = temp;
                    setArray([...newArr]);
                }
            }, duration * (i + 1));
        }
    }
};

export default bubbleSort