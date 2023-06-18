import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Main } from "./Main/Main";
import { Tweets } from "./Tweets/Tweets";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
      </Route>
    </Routes>
  );
};
