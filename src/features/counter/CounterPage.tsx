import { useCounterController } from "./controller/useCounterController";
import { CounterView } from "./view/CounterView";

export const CounterPage = () => {
  const props = useCounterController();
  return <CounterView {...props} />;
};
