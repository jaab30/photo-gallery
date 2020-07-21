


$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&text=orlando&api_key=3990f6dca48c999e64ce0a70db67741c&format=json&nojsoncallback=1&safe_search=1&extras=url_m&per_page=500&content_type=2",
    method: "GET"
})
    .then(response => {


        const { photo } = response.photos
        console.log(photo);
        const photoArr = [];
        for (let i = 0; i < photo.length; i++) {
            if (photo[i].height_m < 300) {
                console.log("inside IF");
                photoArr.push(photo[i])
            }
        }
        console.log(photoArr);
        for (let i = 0; i < 25; i++) {
            if (i < 8) {
                let photoImg = $("<img>").attr("src", photoArr[i].url_m)
                $(".col-1").append(photoImg);
                console.log("8");
            } else if (i >= 8 && i < 16) {
                let photoImg = $("<img>").attr("src", photoArr[i].url_m)
                $(".col-2").append(photoImg);
            } else {
                let photoImg = $("<img>").attr("src", photoArr[i].url_m)
                $(".col-3").append(photoImg);
            }
        }
    })