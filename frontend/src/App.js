import React, { useEffect, useState } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/Home";
import Icon from "./components/layout/icons/Icon";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function App() {
  const [preLoader, setPreLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(true)
    }, 1500);
    return () => {};
  }, [preLoader]);

  return (
    <>
      {!preLoader && (
        <div className="flex justify-center items-center h-screen w-full gap-4">
          <div
              class="w-20 h-20 rounded-full animate-spin
                    border-8 border-solid border-firstColor border-t-transparent relative before:absolute before:w-4 before:rounded-full before:h-4 before:top-0 before:bg-firstColor"
            ></div>
        </div>
      )}
      {preLoader && (
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
