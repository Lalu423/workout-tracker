


const workout = async function logJSONData() { 

//     curl \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"username": "example_username", "password": "example_password "}' \
//   https://wger.de/api/v2/token/

// curl -X GET https://wger.de/api/v2/workout/ \
//      -H 'Authorization: Token 56c76d8178d0eee843d444734daf71278e39d1ab'

  const response = await fetch("https://wger.de/api/v2/workout/", {
    method: "GET",
    headers: {Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab"}
});
    // const response = await fetch("https://wger.de/api/v2/token/", {
    //     method: 'POST', 
    //     headers: {
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: "lalu989", password: "Lionheart515"
    //     })
    // })
  const jsonData = await response.json();
  console.log(jsonData);

  return jsonData;
}



module.exports = {workout}