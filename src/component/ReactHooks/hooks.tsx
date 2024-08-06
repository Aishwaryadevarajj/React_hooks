import React, { useState, useReducer, useEffect, useContext, useRef, useMemo, useCallback, createContext, ReactNode } from 'react';
import styles from "./hooks.module.scss";

// State interface to define the structure of the state managed by the reducer
interface State {
  count: number;
  history: number[];
  maxCount: number;
  minCount: number;
}

// Action interface to define the possible actions for the reducer
interface Action {
  type: 'increment' | 'decrement' | 'clearHistory';
}

// Create a context to share state and dispatch function across the component tree
const CountContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Initial state for the reducer
const initialState: State = {
  count: 0,
  history: [],
  maxCount: 0,
  minCount: 0
};

// Reducer function to manage state transitions based on actions
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      const newIncrementCount = state.count + 1;
      return {
        ...state,
        count: newIncrementCount,
        history: [...state.history, newIncrementCount],
        maxCount: Math.max(state.maxCount, newIncrementCount),
        minCount: Math.min(state.minCount, newIncrementCount)
      };
    case 'decrement':
      const newDecrementCount = state.count - 1;
      return {
        ...state,
        count: newDecrementCount,
        history: [...state.history, newDecrementCount],
        maxCount: Math.max(state.maxCount, newDecrementCount),
        minCount: Math.min(state.minCount, newDecrementCount)
      };
    case 'clearHistory':
      return {
        ...state,
        history: [],
        maxCount: state.count,
        minCount: state.count
      };
    default:
      throw new Error();
  }
}

// Props interface for the CounterProvider component
interface CounterProviderProps {
  children: ReactNode;
}

// CounterProvider component to provide state and dispatch function to its children
const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

// Counter component that uses various React hooks
const Counter: React.FC = () => {
  // useState hook to manage local count state
  const [localCount, setLocalCount] = useState(0);

  // useEffect hook to update the document title based on localCount
  useEffect(() => {
    document.title = `Local Count: ${localCount}`;
  }, [localCount]);

  // useContext hook to access global state and dispatch function
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('Counter must be used within a CounterProvider');
  }
  const { state, dispatch } = context;

  // useRef hook to keep a reference to the current global count
  const countRef = useRef(state.count);

  // useEffect hook to update countRef whenever state.count changes
  useEffect(() => {
    countRef.current = state.count;
  }, [state.count]);

  // useMemo hook to memoize the computed global count
  const computedGlobalCount = useMemo(() => {
    console.log('Computing global count');
    return state.count;
  }, [state.count]);

  // useCallback hook to memoize the incrementLocal function
  const incrementLocal = useCallback(() => {
    setLocalCount(prevCount => prevCount + 1);
  }, []);

  // useCallback hook to memoize the decrementLocal function
  const decrementLocal = useCallback(() => {
    setLocalCount(prevCount => prevCount - 1);
  }, []);

  // useCallback hook to memoize the clearHistory function
  const clearHistory = useCallback(() => {
    dispatch({ type: 'clearHistory' });
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Counter App</h1>

      {/* Local count section */}
      <section>
        <h2>Local Count</h2>
        <p>Local Count: {localCount}</p>
        <div className={styles.button}>
          <button onClick={incrementLocal}>+</button>
          <button onClick={decrementLocal}>-</button>
        </div>
      </section>

      {/* Global count section */}
      <section>
        <h2>Global Count</h2>
        <p>Global Count: {computedGlobalCount}</p>
        <div className={styles.button}>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
        <p>Previous Global Count: {countRef.current}</p>
      </section>

      {/* History section */}
      <section>
        <h2>History of Global Counts:</h2>
        <ul>
          {state.history.length > 0 ? (
            state.history.map((count, index) => (
              <li key={index}>{count}</li>
            ))
          ) : (
            <li>No history available</li>
          )}
        </ul>
      </section>

      {/* Min and max counts */}
      <section>
        <p>Maximum Global Count: {state.maxCount}</p>
        {/* <p>Minimum Global Count: {state.minCount}</p> */}
      </section>

      {/* Clear history button */}
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
};

// Main App component that uses the CounterProvider to wrap the Counter component
const App: React.FC = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
