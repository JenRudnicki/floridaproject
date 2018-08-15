let sun = document.getElementById('topleft');
let beach = document.getElementById('topright');
let island = document.getElementById('bottomleft');
let water = document.getElementById('bottomright');
let logo = document.getElementById('logo');
let form = document.querySelector('form');

sun.addEventListener("click", function () {
    sun.classList.remove('sun');
    sun.classList.remove('active');
    island.classList.remove('island');
    island.classList.remove('active');
    beach.classList.remove('beach');
    beach.classList.remove('active');
    water.classList.remove('water');
    water.classList.remove('active');
    sun.classList.add('sun');
    sun.classList.add('active');
    logo.classList.add('hide');
})

island.addEventListener("click", function () {
    sun.classList.remove('sun');
    sun.classList.remove('active');
    island.classList.remove('island');
    island.classList.remove('active');
    beach.classList.remove('beach');
    beach.classList.remove('active');
    water.classList.remove('water');
    water.classList.remove('active');
    island.classList.add('island');
    island.classList.add('active');
    logo.classList.add('hide');
})

water.addEventListener("click", function () {
    sun.classList.remove('sun');
    sun.classList.remove('active');
    island.classList.remove('island');
    island.classList.remove('active');
    beach.classList.remove('beach');
    beach.classList.remove('active');
    water.classList.remove('water');
    water.classList.remove('active');
    water.classList.add('water');
    water.classList.add('active');
    logo.classList.add('hide');
})

beach.addEventListener("click", function () {
    sun.classList.remove('sun');
    sun.classList.remove('active');
    island.classList.remove('island');
    island.classList.remove('active');
    beach.classList.remove('beach');
    beach.classList.remove('active');
    water.classList.remove('water');
    water.classList.remove('active');
    beach.classList.add('beach');
    beach.classList.add('active');
    logo.classList.add('hide');
})


let baseURI = "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/"


let islandTracks = [];

document.getElementById("bottomleft").addEventListener("click", islandClick);

function islandClick(event) {
    let br = document.querySelector("#bottomright .cardContainer");
    let tl = document.querySelector("#topleft .cardContainer");
    let tr = document.querySelector("#topright .cardContainer");


    while (br.hasChildNodes()) {
        br.removeChild(br.lastChild);
    }

    while (tl.hasChildNodes()) {
        tl.removeChild(tl.lastChild);
    }

    while (tr.hasChildNodes()) {
        tr.removeChild(tr.lastChild);
    }


    fetch(
            "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Island&page_size=10")
        .then(response => response.json())
        .then(result => {
            islandTracks = result.message.body.track_list;
            return result;
        })
        .then(result => {
            console.log(islandTracks);
            processData(islandTracks, "#bottomleft .cardContainer")
        });
}

let waterTracks = [];

document.getElementById("bottomright").addEventListener("click", waterClick);

function waterClick(event) {

    let bl = document.querySelector("#bottomleft .cardContainer");
    let tl = document.querySelector("#topleft .cardContainer");
    let tr = document.querySelector("#topright .cardContainer");

    while (bl.hasChildNodes()) {
        bl.removeChild(bl.lastChild);
    }
    while (tl.hasChildNodes()) {
        tl.removeChild(tl.lastChild);
    }
    while (tr.hasChildNodes()) {
        tr.removeChild(tr.lastChild);
    }


    fetch(
            "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Water&page_size=10")
        .then(response => response.json())
        .then(result => {
            waterTracks = result.message.body.track_list;
            return result;
        })
        .then(result => {
            console.log(waterTracks);
            processData(waterTracks, "#bottomright .cardContainer")
        });
}
let beachTracks = [];
document.getElementById("topright").addEventListener("click", beachClick);

function beachClick(event) {
    let bl = document.querySelector("#bottomleft .cardContainer");
    let tl = document.querySelector("#topleft .cardContainer");
    let br = document.querySelector("#bottomright .cardContainer");
    while (bl.hasChildNodes()) {
        bl.removeChild(bl.lastChild);
    }
    while (tl.hasChildNodes()) {
        tl.removeChild(tl.lastChild);
    }
    while (br.hasChildNodes()) {
        br.removeChild(br.lastChild);
    }
    fetch(
            "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Beach&page_size=10")
        .then(response => response.json())
        .then(result => {
            beachTracks = result.message.body.track_list;
            return result;
        })
        .then(result => {
            console.log(beachTracks);
            processData(beachTracks, "#topright .cardContainer")
        });
}
let sunTracks = [];
document.getElementById("topleft").addEventListener("click", sunClick);

function sunClick(event) {
    let bl = document.querySelector("#bottomleft .cardContainer");
    let br = document.querySelector("#bottomright .cardContainer");
    let tr = document.querySelector("#topright .cardContainer");
    while (bl.hasChildNodes()) {
        bl.removeChild(bl.lastChild);
    }
    while (br.hasChildNodes()) {
        br.removeChild(br.lastChild);
    }
    while (tr.hasChildNodes()) {
        tr.removeChild(tr.lastChild);
    }
    fetch(
            "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Sun&page_size=10")
        .then(response => response.json())
        .then(result => {
            sunTracks = result.message.body.track_list;
            return result;
        })
        .then(result => {
            console.log(sunTracks);
            processData(sunTracks, "#topleft .cardContainer")
        });
}

function processData(trackList, location) {
    trackList.forEach(element => createCard(element, location));
}

function createCard(florida, location) {
    let card = document.createElement("div");
    card.classList.add("card");
    let track = document.createElement("h1");
    track.innerText = `Track Name:  ${florida.track.track_name}`;
    let artist = document.createElement("h3");
    artist.innerText = `Artist Name:  ${florida.track.artist_name}`;

    card.appendChild(track);
    card.appendChild(artist);

    document.querySelector(location).appendChild(card);
}
checkUserExists()
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let userEmail = document.getElementById("email").value;
    localStorage.setItem("email", userEmail);
    form.style.display = 'none';
})

function checkUserExists(){
    if (localStorage.getItem("email")) {
        form.style.display = 'none';
    }
}


// the root url to use http://api.musixmatch.com/ws/1.1/