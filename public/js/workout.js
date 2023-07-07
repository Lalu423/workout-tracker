console.log("workout script works");



const workout = async () => {
  try {
    const response = await fetch("https://wger.de/api/v2/exercise", {
      method: "GET",
      headers: { Authorization: "Token 56c76d8178d0eee843d444734daf71278e39d1ab" }
    });

    const data = await response.json();
    console.log(data);
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

workout();



//module.exports = { workout }