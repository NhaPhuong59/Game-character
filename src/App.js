import React, { useState } from "react";
import PageHeader from "./components/Page-Header";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import "./styles.scss";

function App() {
  const allPart = [
    { name: "body", total: 17 },
    { name: "eyes", total: 17 },
    { name: "hair", total: 73 },
    { name: "mouth", total: 24 },
    { name: "eyebrows", total: 15 },
    { name: "hat", total: 28 },
    { name: "glasses", total: 17 },
    { name: "clothing1", total: 5 },
    { name: "clothing2", total: 5 },
    { name: "clothing3", total: 9 },
  ];

  const all_Images = allPart.map(({ name, total }) => {
    const images = [];
    for (let i = 0; i < total; i++) {
      images.push(`/images/${name}/${i + 1}.png`);
    }
    return { name, total, images };
  });
  const getRandomItems = (list) => {
    return parseInt(Math.random() * list.length);
  };
  const getRandomPart = () => {
    const parts = {};
    for (let { name, images } of all_Images) {
      parts[name] = images[getRandomItems(images)];
    }
    return parts;
  };
  const [parts, setPart] = useState(getRandomPart);
  const randomizePart = () => {
    setPart(getRandomPart);
  };
  const setImage = (name, image) => {
    setPart({ ...parts, [name]: image });
  };

  return (
    <div className="App">
      <PageHeader />
      <div className="main-content">
        <div>
          <Avatar part={parts} randomizePart={randomizePart} />
        </div>
        <div className="all-part-list">
          {all_Images.map(({ name, images }) => {
            return (
              <PartList
                key={name}
                name={name}
                images={images}
                setImage={setImage}
                selectedImage={parts[name]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;