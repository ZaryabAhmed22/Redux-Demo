const redux = require("redux");

const counterReducer = (state = { counter: 0 }, dispatch) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

console.log(store.getState()); // >> {counter: 1}
//subcription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//making redux aware of the subcriber
store.subscribe(counterSubscriber);

//Creating and dispatching an action
store.dispatch({ type: "INCREMENT" });
