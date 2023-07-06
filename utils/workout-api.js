const workout = async () => {
  alert("here");
  try {
    const response = await fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });
    alert("here");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log(data);
    alert("here");
    // return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch workout data: ' + error.message);
  }
};



//drop down menu attempt

// const workout = async function workoutData() { 

//   const response = await fetch("https://wger.de/api/v2/exercise", {
//     method: "GET",
//     headers: {Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab"}
// });
    
//   const jsonData = await response.json();
//   //console.log(jsonData);
//   const dropDown = document.getElementById("exerciseDropdown");

//   jsonData.results.forEach((exercise) => {
//     const option = document.createElement("option");
//     option.text = exercise.name;
//     option.value = exercise.id;
//     dropDown.appendChild(option);
//   });

//   return jsonData;
// };



// module.exports = { workout }


// attempt number #3

// const response = await fetch("https://wger.de/api/v2/token/", {
    //     method: 'POST', 
    //     headers: {
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: "lalu989", password: "Lionheart515!"
    //     })
    // })