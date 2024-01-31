var arr =[
    {dp:"https://i.pinimg.com/236x/a8/b3/08/a8b30889125e2c322da6159902e86aac.jpg", story:"https://i.pinimg.com/236x/c5/a1/fe/c5a1fe6ec292c01d266bd8f3b70d4ac2.jpg"},
    {dp:"https://i.pinimg.com/236x/be/e8/fc/bee8fc3a467de25217314b2f98991055.jpg", story:"https://i.pinimg.com/236x/cb/29/43/cb29438daa166cd39bc528ec42a35d0f.jpg"},
    {dp:"https://i.pinimg.com/236x/25/03/0c/25030c52d4484b2025dff94b96d316a5.jpg", story:"https://i.pinimg.com/236x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg"},
    {dp:"https://i.pinimg.com/236x/73/93/9d/73939d7861ece35fb7030ab1e54b6ca2.jpg", story:"https://i.pinimg.com/564x/6f/44/d5/6f44d58aa670930d2b9cbb16e63d83ef.jpg"}
]

var storiyan = document.querySelector(".storiyan")

var clutter = "";

arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
});


storiyan.innerHTML = clutter;


storiyan.addEventListener("click",function(dets){
    document.querySelector(".fullscreen").style.display = "block"

    document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".fullscreen").style.display = "none"
    },3000)
});