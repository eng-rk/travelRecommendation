const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsDiv = document.getElementById('results');

let travelData = {};

// FETCH JSON DATA
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log(data);
  })
  .catch(error => console.log('Error fetching data:', error));


// SEARCH BUTTON
searchBtn.addEventListener('click', () => {

  const input = document
    .getElementById('searchInput')
    .value
    .toLowerCase();

  resultsDiv.innerHTML = '';

  if(input.includes('beach')) {
    displayResults(travelData.beaches);
  }
  else if(input.includes('temple')) {
    displayResults(travelData.temples);
  }
  else if(input.includes('country')) {
    displayResults(travelData.countries);
  }
  else {
    resultsDiv.innerHTML = `
      <h2>No results found.</h2>
    `;
  }

});


// CLEAR BUTTON
clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
  document.getElementById('searchInput').value = '';
});


// DISPLAY RESULTS
function displayResults(items) {

  items.forEach(item => {

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">

      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;

    resultsDiv.appendChild(card);

  });

}