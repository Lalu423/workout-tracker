console.log("workout script works");



const workout = async function workoutData() {
  try {
    const response = await fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });

    const data = await response.json();

    console.log(
      "workout data",
      data
    )

    const response2 = await fetch("https://wger.de/api/v2/exerciseimage", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });

    const data2 = await response2.json();

    console.log("workout image", data2)

    const dropdown = document.getElementById('dropdown');
    // const ddSets = document.getElementById('ddSets');
    // const ddReps = document.getElementById('ddReps');

    data.results.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;

      dropdown.appendChild(option);
    });

    // for (let i = 1; i <= 4; i++) {
    //   const option = document.createElement('option');
    //   option.value = i;
    //   option.textContent = i;
    //   ddSets.appendChild(option)
    // }


    // for (let i = 1; i <= 20; i++) {
    //   const option = document.createElement('option');
    //   option.value = i;
    //   option.textContent = i;
    //   ddReps.appendChild(option)
    // }

    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', async () => {
      const selectedId = dropdown.value;
      const selectedExercise = data.results.find(item => item.id === Number(selectedId));

      // Save to user
      const savedDataContainer = document.getElementById('savedDataContainer');
      const savedData = document.createElement('div');
      savedData.textContent = `Name: ${selectedExercise.name}, Description: ${selectedExercise.description}`;
      savedDataContainer.appendChild(savedData);

      const name = selectedExercise.name;
      const description = selectedExercise.description;
      const sets = document.querySelector('#sets').value.trim();
      const reps = document.querySelector('#reps').value.trim();

      const response = await fetch('/api/workout', {
        method: 'POST',
        body: JSON.stringify({ name, description, sets, reps }),
        headers: { 'Content-Type': 'application/json' },
      });

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


