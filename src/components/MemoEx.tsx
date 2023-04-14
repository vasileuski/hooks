import { useMemo } from "react";

interface Props {
  name: string;
  age: number;
}

export const MemoEx = ({ name, age }: Props) => {
  const memoizedGreeting = useMemo(() => {
    return `Hello ${name}, you are ${age} years old!`;
  }, [name, age]);

  return <div>{memoizedGreeting}</div>;
};
