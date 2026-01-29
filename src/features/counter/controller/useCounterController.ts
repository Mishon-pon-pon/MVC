import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { increment, addBy } from "../model/counterSlice";

export const useCounterController = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return {
    value,
    onIncrement: () => dispatch(increment()),
    onAddFive: () => dispatch(addBy(5)),
  };
};
