console.log("workout script works");



const workout = async function workoutData() {
  try {
    const response = await fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error; {
      throw new Error('Failed to fetch workout data' + error.message);
    }
  }
};



module.exports = { workout }