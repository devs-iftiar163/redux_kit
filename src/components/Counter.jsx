import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, set } from "../features/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(set())}>Set</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button>Manual Set</button>
    </>
  );
};

export default Counter;
