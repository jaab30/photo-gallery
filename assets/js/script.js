
// function helper to get the value from the search input form.
const getQuery = (e) => {
    e.preventDefault();

    const query = $(".search-input").val().trim();
    if (!query) return $(".alert-mssg").text(`Please Enter a Search Term`);

    getPhotos(query)
    $(".search-input").val("");
    $(".alert-mssg").text("");
    $(".status-mssg").text("");
    $(".banner-title").text("");
    $(".banner-text").addClass("banner-search").text(`Search results for: ${query}`)

    window.location.href = "#banner";
};

// function helper to make the API call and pass the value from the form
const getPhotos = async (query) => {

    const response = await $.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=urPpuulEpzzAkhzft7TJA5Q6UEyyDL9tTaALLgnWsz8&per_page=27`);

    displayResults(response, query);
};

// function helper to render the HTML code for each image to be appended to the DOM.
const renderPhoto = (url, altInfo) => {
    return (
        `<div class="photo-background">
            <img src=${url} alt="${altInfo}" title="${altInfo}">
         </div>
        `
    )
};

// function helper to grab the results from the API call and append to the DOM.
const displayResults = (response, query) => {

    $(".col-1").empty();
    $(".col-2").empty();
    $(".col-3").empty();

    if (response.results.length === 0) {
        $(".banner-text").html(`<p class="status-mssg">Could not find any records for: ${query}.</p> <p>Please, try again... Thanks..!</p>`)
    };

    let colIndex = 1;
    for (let i = 0; i < response.results.length; i++) {

        const { urls, alt_description } = response.results[i];

        $(".col-" + colIndex).append(renderPhoto(urls.small, alt_description));
        if (colIndex === 3) {
            colIndex = 0
        };
        colIndex++
    };
};

// function helper to change nav styling when user scrolls.
const listenScrollEvent = e => {
    if (window.scrollY < 200) {
        $("header").removeClass("header-scroll");
    } else {
        $("header").addClass("header-scroll");
    }
};

// Event listener to trigger "getQuery" function when user clicks on the submit button or hit "enter."
$("#search-form").on("submit", getQuery);

// Event listener to trigger "listenScrollEvent" function when user scrolls.
window.addEventListener('scroll', listenScrollEvent);

// call the function to get random photos when app first open.
getPhotos("random");