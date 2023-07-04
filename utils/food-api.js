const food = async function logJSONData() { 

  
  const response = await fetch("https://wger.de/api/v2/ingredient/?name=0% azúcares", {
    method: "GET",
    headers: {Authorization: "Token 699596882887058842123419097658e4051e0fdc"}
});

  const jsonData = await response.json();
  console.log(jsonData);
  
    return jsonData;
  }
  
  
  
  module.exports = {food}
