

const getPictures = async () => {

    const response = await $.get("https://api.unsplash.com/search/photos?page=1&query=drums&client_id=urPpuulEpzzAkhzft7TJA5Q6UEyyDL9tTaALLgnWsz8&per_page=27");

    displayResults(response);
}

const displayResults = (response) => {
    for (let i = 0; i < response.results.length; i++) {
        const { urls } = response.results[i];
        if (i < 9) {
            let photoImg = $("<img>").attr("src", urls.regular)
            $(".col-1").append(photoImg);
            console.log("8");
        } else if (i >= 9 && i < 18) {
            let photoImg = $("<img>").attr("src", urls.regular)
            $(".col-2").append(photoImg);
        } else {
            let photoImg = $("<img>").attr("src", urls.regular)
            $(".col-3").append(photoImg);
        }
    }
}

getPictures();




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