import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


export const SharedLayout = () => {

  return(
    <>
      <Header/>
      <Toaster/>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
  </>
  );
};