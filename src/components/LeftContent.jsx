import { Link } from "react-router-dom";
import dataStore from "../data/stores.json";

const LeftContent = ({ setShow }) => {
  return (
    <div className="leftContent">
      <h3>Momo Milk Tea</h3>
      <div className="store">
        {dataStore.stores.map((store, index) => {
          return (
            <Link key={store.id} className="link" to={`store-${store.id}`}>
              <button onClick={setShow.bind(this, true)} key={store.id}>
                {store.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContent;
