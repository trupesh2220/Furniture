import React, { useEffect, useState } from "react";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/Home";
import Icon from "./components/layout/icons/Icon";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Header from "./components/layout/header/Header";
import Loader from "./components/layout/loader/Loader";
import Slider from "./components/layout/slider/Slider";

function App() {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1500);
    return () => {};
  }, [preLoader]);

  return (
    <>
      {preLoader && <Loader />}
      {!preLoader && (
        <div className="font-">
          <Header />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
