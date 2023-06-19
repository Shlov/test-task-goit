import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";


export const SharedLayout = () => {

  return(
    <Container>
      <Header/>
      <Toaster/>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
  </Container>
  );
};