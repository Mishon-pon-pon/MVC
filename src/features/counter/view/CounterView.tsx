type Props = {
  value: number;
  onIncrement: () => void;
  onAddFive: () => void;
};

export const CounterView = ({ value, onIncrement, onAddFive }: Props) => (
  <div>
    <p>Value: {value}</p>
    <button onClick={onIncrement}>+1</button>
    <button onClick={onAddFive}>+5</button>
  </div>
);
