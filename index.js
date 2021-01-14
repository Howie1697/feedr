//https://test.spaceflightnewsapi.net/api/v2/articles

var $xhr = $.getJSON('https://test.spaceflightnewsapi.net/api/v2/articles');

$xhr.done(function (data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data);
    for(i=0; i < 4; i++){
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
}});
$xhr.fail(function (err) {
    console.log(err)
});
/*Grab section one and change the info(children) inside of it.
let secOne = $("#sectionOne")
let aTag = $("#sectionOne").children("a")
$("#sectionOne").css("border", "3px solid blue");
// 19 is using aTag so no need to have $ for future refrence aTag.attr("href","https://www.google.com");
$("#sectionOne").children("a").attr("href", "https://www.google.com");
let title1 = aTag.children("h3").text("Space Flight News");
let summary1 = secOne.children("h6").text("While SpaceX remains focused on Starship flight testing as the dust settles from SN8’s launch debut, the company continues to make slow...")
//
let secImg1 = $(".impressions").first()
let imgTag = $("<img>")
imgTag.attr("src", "https://www.defencetalk.com/wp-content/uploads/2020/01/space-force-logo.jpg").css("height", "50px");
secImg1.append(imgTag)
console.log(secImg1)*/