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

    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', () => {
      const selectedId = dropdown.value;
      const selectedExercise = data.results.find(item => item.id === Number(selectedId));
      
      // Save to user
      const savedDataContainer = document.getElementById('savedDataContainer');
      const savedData = document.createElement('div');
      savedData.textContent = `Name: ${selectedExercise.name}, Description: ${selectedExercise.description}`;
      savedDataContainer.appendChild(savedData);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

const generatePlannerHTML = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const plannerTemplate = document.getElementById("planner-template").innerHTML;
  const compiledTemplate = Handlebars.compile(plannerTemplate);
  const plannerHTML = compiledTemplate({ days: daysOfWeek });
  const plannerContainer = document.getElementById("planner-container");
  plannerContainer.innerHTML = plannerHTML;
};

// workoutData();

workout()
generatePlannerHTML();





// module.exports = { workout }