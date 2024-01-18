document.addEventListener('DOMContentLoaded', function () {
    const predictButton = document.getElementById('predictButton');
    const nameInput = document.getElementById('nameInput');
    const ageResult = document.getElementById('ageResult');

    predictButton.addEventListener('click', function () {
        const name = nameInput.value;

        // Make sure the name is not empty
        if (name.trim() === '') {
            alert('Please enter a name.');
            return;
        }

        // Fetch age prediction data from the Agify API
        fetch(`https://api.agify.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                const age = data.age ? data.age.toFixed(2) : 'Not available';
                ageResult.innerHTML = `<p>Predicted Age: ${age}</p>`;
            })
            .catch(error => console.error('Error fetching age prediction:', error));
    });
});
