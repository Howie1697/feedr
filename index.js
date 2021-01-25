//https://test.spaceflightnewsapi.net/api/v2/articles

var $xhr = $.getJSON('https://test.spaceflightnewsapi.net/api/v2/articles');

$xhr.done(function (data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data);
    for (i = 0; i < 4; i++) {
        let secOne = $(`#section${i}`)
        let aTag = $(`#section${i}`).children("a")
        //$("#sectionOne").css("border", "3px solid blue");
        // 19 is using aTag so no need to have $ for future refrence aTag.attr("href","https://www.google.com");
        aTag.attr("href", data[i].url);
        let title1 = aTag.children("h3").text(data[i].title);
        let summary1 = secOne.children("h6").text(data[i].summary)
        let secImg1 = $(`#impression${i}`)
        let imgTag = $("<img>")
        imgTag.attr("src", data[i].imageUrl).css("height", "50px");
        secImg1.append(imgTag)
        console.log(secImg1)
    }
});
$xhr.fail(function (err) {
    console.log(err)
});

let getFood = () => {
    console.log("clicked");
    $(`#section${0}`).children("img").remove()
    var $xhr = $.getJSON('https://foodish-api.herokuapp.com/api/');
    $xhr.done(function (data) {
        if ($xhr.status !== 200) {
            return;
        }

        console.log(data);
        for (i = 0; i < 4; i++) {
            let secOne = $(`#section${i}`)
            let aTag = $(`#section${i}`).children("a")
            //aTag.attr("href", data[i].url);
            let title1 = aTag.children("h3").text(" ");
            let summary1 = secOne.children("h6").text(" ")
            let articleLine = $('.article').css("borderBottom", "0px");
            console.log(title1)
            let secImg1 = $(`#impression${i}`).children("img").remove()
        }
        let secImg1 = $(`#section${0}`)
        let imgTag = $("<img>")
        console.log(data.image)
        imgTag.attr("src", data.image).css("height", "500px");
        secImg1.append(imgTag)
    });
    $xhr.fail(function (err) {
        console.log(err)
    });
};
let foodLink = $('#food').click(getFood)