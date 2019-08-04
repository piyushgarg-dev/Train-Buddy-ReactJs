import React, { useState } from "react";
import Trainform from "./components/Trainform";
import "./App.css";
import Traincard from "./components/Traincard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [fromStation, setFromStation] = useState("");

  const [trainData, setTrainData] = useState([]);
  const handelFormData = async (fromS, toS) => {
    await setFromStation(fromS);

    const query = {
      search: fromS
    };
    await fetch("https://trains.p.rapidapi.com/", {
      method: "POST",
      headers: {
        "x-rapidapi-host": "trains.p.rapidapi.com",
        "x-rapidapi-key": "55816bf15emshbef5892f101cc0cp1f2484jsnd49b93aef792",
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrainData(data);
      });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Trainform onTrainFormSubmit={handelFormData} />
        {trainData.map(train => (
          <Traincard
            key={train.data.id}
            arrivalTime={train.data.arriveTime}
            departTime={train.data.departTime}
            from={train.train_from}
            to={train.train_to}
            number={train.train_num}
            name={train.name}
            classes={train.data.classes}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
