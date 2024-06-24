const generateArray = (length: number) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * 15))
  );

  export default generateArray