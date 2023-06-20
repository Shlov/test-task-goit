import { useEffect, useState } from "react"

export const useLocalStorage = (key, defVal) => {
  const [state, setState] = useState(()=> JSON.parse(localStorage.getItem(key)) ?? defVal);
  useEffect(()=> {localStorage.setItem(key, JSON.stringify(state))}, [key, state]);
  return [state, setState];
};
