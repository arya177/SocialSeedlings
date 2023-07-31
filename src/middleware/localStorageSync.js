const localStorageSyncMiddleware = (store) => (next) => (action) => {
    const result = next(action);
  
    // Save the entire Redux state to local storage whenever the state changes
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
  
    return result;
  };
  
  export default localStorageSyncMiddleware;