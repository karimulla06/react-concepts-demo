import React, {useState,useContext} from 'react';

export const CounterContext = React.createContext();

export default function ContextHookDemo() {
   const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <ChildComponents />
    </CounterContext.Provider>
  )
}

function ChildComponents() {
  const { count } = useContext(CounterContext);
   return (
    <>
      <h2>The Count is {count} !</h2>
      <IncrementComponent />
      <DecrementComponent />
    </>
  )
}

function IncrementComponent() {
  const { setCount } = useContext(CounterContext);

  return (
   <button onClick={() => setCount(c => c+1)}>
        Increment
   </button>
  )
}

class DecrementComponent extends React.Component {
  render() {
    return (
      <CounterContext.Consumer>
        {({ count, setCount }) => {
           return (
            <button onClick={() => setCount(count-1)}>
                  Decrement
            </button>
            )
        }}
      </CounterContext.Consumer>
    )
  }
}