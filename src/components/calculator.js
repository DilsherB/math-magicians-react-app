const Calculator = () => {
  const btns = () => {
    const calcBtns = [];
    const btnArr = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '0', '.', '='];
    btnArr.forEach((btn) => calcBtns.push(<button type="button" key={btn} id={btn}>{btn}</button>));
    return calcBtns;
  };
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="btnsContainer">
        { btns() }
      </div>
    </div>
  );
};
export default Calculator;
