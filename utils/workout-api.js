const workout = async function populateDropdown() { 

//     curl \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"username": "example_username", "password": "example_password "}' \
//   https://wger.de/api/v2/token/

// curl -X GET https://wger.de/api/v2/workout/ \
//      -H 'Authorization: Token 56c76d8178d0eee843d444734daf71278e39d1ab'

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

// const dropdownMenu = document.getElementById("myDropdown");

// jasonData.forEach(item => {
//   const option = document.createElement("option");
//   option.value = item.name;
//   option.text = item,id;
//   dropdownMenu.appendChild(option);
// });

// const displayWorkout = async () => {
//   const options = await workout();
//   options.jsonData.forEach(option => {
//     const newOption = documnet.createElement("option");
//     console.log(option);
//     newOption.value = option.name;
//     newOption.text = option.name;
//     results.appendChild(newOption);
//   });
// };
// displayWorkout();




module.exports = { workout }