const food = async function logJSONData() { 
  try{ 
  const response = await fetch("https://wger.de/api/v2/ingredient", {
    method: "GET",
    headers: { Authorization: "Token 699596882887058842123419097658e4051e0fdc" }
});
 
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error; {
      throw new Error('Failed to fetch food data' + error.message);
    }
  }
};
  
  
  
  module.exports = {food}
