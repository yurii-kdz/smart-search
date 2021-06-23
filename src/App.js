import {mock} from "./mock/mock";
import {useEffect, useState} from "react";

const getValueFromInput = (e) => {
    return e.target.value;
}

const getDataFromMock = (e) => {
    let gettedValue = getValueFromInput(e);
    return mock[gettedValue];
}

const App = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {}, [items]);

    const renderList = (e) => {
        if(getDataFromMock(e)) {
            setItem(items => [...items, getDataFromMock(e)]);
        }
        if(!e.target.value) {
            setItem(items => []);
        }
    }
  return (
    <div>
      <p>smart search</p>
      <input onChange={renderList}/>
      <div>
          {items.map(i => {return <p>{i}</p>})}
      </div>
    </div>
  );
};

export default App;
