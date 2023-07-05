console.log("workout script works");



const workout = async function workoutData() {
  try {
    const response = await fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });

    const data = await response.json();

    const dropdown = document.getElementById('dropdown');

    data.results.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;

      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

workoutData();



module.exports = { workout }