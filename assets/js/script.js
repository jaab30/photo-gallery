

const listenScrollEvent = e => {
    if (window.scrollY < 200) {
        $("header").removeClass("header-scroll");
    } else {
        $("header").addClass("header-scroll");
    }
}

window.addEventListener('scroll', listenScrollEvent)




const getQuery = (e) => {
    e.preventDefault();
    const query = $(".search-input").val().trim();
    if (!query) return $(".alert-mssg").html(`Please Enter a Search Term &#8594;`);
    getPhotos(query)
    $(".search-input").val("");
    $(".alert-mssg").text("");
    $(".status-mssg").text("");

}

const getPhotos = async (query) => {

    const response = await $.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=urPpuulEpzzAkhzft7TJA5Q6UEyyDL9tTaALLgnWsz8&per_page=27`);

    displayResults(response, query);
    window.location.href = "#banner";
}

const renderPhoto = (url, altInfo) => {
    return (
        `<div class="photo-background">
            <img src=${url} alt="${altInfo}" title="${altInfo}">
         </div>
        `
    )
}

const displayResults = (response, query) => {
    console.log(response.results.length);
    $(".col-1").empty();
    $(".col-2").empty();
    $(".col-3").empty();
    if (response.results.length === 0) {
        $(".status-mssg").text(`Could not find any records for ${query}. Please, try again... Thanks..!`)
    }
    let colIndex = 1;
    for (let i = 0; i < response.results.length; i++) {
        const { urls, alt_description } = response.results[i];
        console.log(colIndex);
        $(".col-" + colIndex).append(renderPhoto(urls.small, alt_description));
        if (colIndex === 3) {
            colIndex = 0
        }
        colIndex++
    }
}

$("#search-form").on("submit", getQuery)

// console.log(colIndex);
// if (i < 9) {
//     $(".col-1").append(renderPhoto(urls.small, alt_description));
// } else if (i >= 9 && i < 18) {
//     $(".col-2").append(renderPhoto(urls.small, alt_description));
// } else {
//     $(".col-3").append(renderPhoto(urls.small, alt_description));
// }
// $(".photo-container").append(renderPhoto(urls.small, alt_description));

// $(".submit-btn").on("click", getQuery)



// $.ajax({
//     url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&text=dogs&api_key=3990f6dca48c999e64ce0a70db67741c&format=json&nojsoncallback=1&safe_search=1&extras=url_m&per_page=500&content_type=7",
//     method: "GET"
// })
//     .then(response => {


//         const { photo } = response.photos
//         console.log(photo);
//         const photoArr = [];
//         for (let i = 0; i < photo.length; i++) {
//             if (photo[i].height_m < 400) {
//                 console.log("inside IF");
//                 photoArr.push(photo[i])
//             }
//         }
//         console.log(photoArr);
//         for (let i = 0; i < 27; i++) {
//             if (i < 9) {
//                 let photoImg = $("<img>").attr("src", photoArr[i].url_m)
//                 $(".col-1").append(photoImg);
//                 console.log("8");
//             } else if (i >= 9 && i < 18) {
//                 let photoImg = $("<img>").attr("src", photoArr[i].url_m)
//                 $(".col-2").append(photoImg);
//             } else {
//                 let photoImg = $("<img>").attr("src", photoArr[i].url_m)
//                 $(".col-3").append(photoImg);
//             }
//         }
//     })