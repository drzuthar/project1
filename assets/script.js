
// localStorage.setItem("wikiSearch", searchWikipedia);
// localStorage.getItem ("wikiSearch");
// console.log(localStorage) This was my effort at getting the information from the Wiki search to stay in the local storage or console log but I couldnt figure out how to define the "wikiData" im 
//not sure if thats an issue on my end or wikipedias either as I dont have anything in our code called wikidata which now that I think about it maybe I should

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





function searchYouTube() {
    const searchTerm = document.getElementById('searchInput').value;
    const apiKey = 'AIzaSyC4ge-yHfYS_jF_F6uZzqaTtumYpbgFQNw'; 
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&type=video&key=${apiKey}`;

    $.ajax({
      url: apiUrl,
      dataType: 'json',
      success: function (data) {
        displayYouTubeResults(data.items);
      },
      error: function (error) {
        console.error('Error fetching data from YouTube API:', error);
      }
    });
  }

  function displayYouTubeResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `
        <h3>${result.snippet.title}</h3>
        <p>${result.snippet.description}</p>
        <hr>
      `;
      searchResultsContainer.appendChild(resultElement);
    });
  }
