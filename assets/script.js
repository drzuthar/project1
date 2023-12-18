
function searchWikipedia() {
    const searchTerm = document.getElementById('searchInput').value;
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}&callback=?`;

    $.ajax({
      url: apiUrl,
      dataType: 'jsonp',
      success: function (data) {
        displaySearchResults(data.query.search);
      },
    error: function (error) {
        console.error('Error fetching data from Wikipedia API:', error);
      }
    });
  }

  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';


    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.snippet}</p>
      <hr> `;

      searchResultsContainer.appendChild(resultElement);
    });
  }



