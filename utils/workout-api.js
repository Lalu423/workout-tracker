const workout = async function populateDropdown() { 

  const response = await fetch("https://wger.de/api/v2/exercise", {
    method: "GET",
    headers: {Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab"}
});
    // const response = await fetch("https://wger.de/api/v2/token/", {
    //     method: 'POST', 
    //     headers: {
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: "lalu989", password: "Lionheart515!"
    //     })
    // })
  const jsonData = await response.json();
  //console.log(jsonData);
  const dropDown = document.getElementById("exerciseDropdown");

  jsonData.results.forEach((exercise) => {
    const option = document.createElement("option");
    option.text = exercise.name;
    option.value = exercise.id;
    dropDown.appendChild(option);
  });

  return jsonData;
};



module.exports = { workout }