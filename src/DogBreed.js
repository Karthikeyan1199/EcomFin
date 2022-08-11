import React from "react";

const DogBreed = () => {
  const [breedList, setBreedList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    if (breedList.length < 1) {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => {
         // setLoading(true);
          return res.json();
        })
        .then((json) => {
          setBreedList(Object.keys(json["message"]));
         // setLoading(true);
        })
        .catch((error) => {
          console.log(error);
         // setLoading(false);
        })
       // .finally(() => setLoading(false));
    }
  }, [breedList.length]);
  React.useEffect(() => {
    if (breedList.length > 0) {
      let resultarray = [];
      setLoading(true);
      breedList.map(async (data, index) => {
        await fetch(
          "https://dog.ceo/api/breed/" + breedList[index] + "/images/random"
        )
          .then((res) => {
            setLoading(true);
            return res.json();
          })
          .then((json) => {
            setLoading(true);
            resultarray.push(json["message"]);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(true));
        setImage(resultarray);
        setLoading(false);
      });
      
    }
  }, [breedList, breedList.length]);
  return loading ? (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"800px"}}><h1>Loading...</h1></div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", width: "800px", flexWrap: "wrap" }}>
        {image.map((data) => (
          <img
            height={"100px"}
            width={"200px"}
            src={data}
            alt={"noImage"}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default DogBreed;
