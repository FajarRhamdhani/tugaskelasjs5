
//Nomor 1

// var proses = document.querySelector("button");
// var isiData = document.querySelector("input");
// var ulData = document.querySelector("ul");

// var result = () => {
//    var liData = document.createElement("li");
   
//    proses.addEventListener("click", (e) => {
//       if(isiData.value){
//          liData.textContent = isiData.value;
//          ulData.appendChild(liData);
//          isiData.value = "";
//          e.preventDefault();
//       }
//    });

// }

// result();

// var result = (e) => {
//    var liData = document.createElement("li");
//       if(isiData.value){
//          liData.textContent = isiData.value;
//          ulData.appendChild(liData);
//          isiData.value = "";
//          e.preventDefault();
//       }

// }

// proses.addEventListener("click", result);

// Nomor 2 dan 3

// var list = {
//    "images": [
//    {
//    "id": "1",
//    "url": "https://picsum.photos/200/300/?image=10"
//    },
//    {
//    "id": "2",
//    "url": "https://picsum.photos/200/300/?image=20"
//    },
//    {
//    "id": "3",
//    "url": "https://picsum.photos/200/300/?image=30"
//    },
//    {
//    "id": "4",
//    "url": "https://picsum.photos/200/300/?image=40"
//    },
//    {
//    "id": "5",
//    "url": "https://picsum.photos/200/300/?image=50"
//    },
//    {
//    "id": "6",
//    "url": "https://picsum.photos/200/300/?image=60"
//    },
//    {
//    "id": "7",
//    "url": "https://picsum.photos/200/300/?image=70"
//    },
//    {
//    "id": "8",
//    "url": "https://picsum.photos/200/300/?image=80"
//    },
//    {
//    "id": "9",
//    "url": "https://picsum.photos/200/300/?image=90"
//    },
//    {
//    "id": "10",
//    "url": "https://picsum.photos/200/300/?image=100"
//    }
//    ]
//    };

// var gambar = document.querySelectorAll("img");


// var result = () => {
//    for (let i = 0; i < gambar.length; i++) {
//       for (let y = 0; y < list["images"].length; y++) {
//          if(gambar[i].id === list["images"][y]["id"]){
//             gambar[i].src = list["images"][y]["url"];
//             document.body.appendChild(gambar[i]);
//             document.write("<br>");
//             gambar[i].addEventListener("click", () => {
//                alert(`You clicked on the image ID : ${list["images"][y]["id"]}`)
//             })
//          }
//       }   
//    }
// }

// result()