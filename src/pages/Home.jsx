import { useState } from "react";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="home">
      <LeftContent setShow={setShow}/>
      <RightContent show={show}/>
    </div>
  );
};

export default Home;
