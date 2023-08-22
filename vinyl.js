// const recordBtn = document.getElementById('record-btn');
// let trackBtnClick=-1
// const dataDiv= document.getElementById('data-container');
// const url = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
//     const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '32c60e1b81mshf734d0f60eb527cp1a7e82jsnd97cef222b63',
//         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
//     }
// };
// async function songFetch(){
// try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log("result", result)
//     result.forEach(song=>{
//         console.log("song,",song)
//         console.log(song.artist.monthlyListeners)
//         let artistName=document.createElement('p')
//         let monthlyPeeps=document.createElement('p')
//         artistName.innerText=song.artist
//         monthlyPeeps.innerText=song.monthlyListeners
//         dataDiv.appendChild(artistName)
//         dataDiv.appendChild(monthlyPeeps)
//         result[trackBtnClick].song.artist.monthlyListeners
//     })
// } catch (error) {
//     console.error(error);
// }}
// recordBtn.addEventListener('click',()=>{
//     trackBtnClick+=1
//     console.log(trackBtnClick);
//     songFetch();
// })
// // result[trackBtnClick].song.artist.monthlyListener

// const recordBtn = document.getElementById('record-btn');
// let trackBtnClick = -1;
// const dataDiv = document.getElementById('data-container');
// const url = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '32c60e1b81mshf734d0f60eb527cp1a7e82jsnd97cef222b63',
//     'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
//   }
// };

// async function songFetch() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();

//     // Clear existing data before appending new data
//     dataDiv.innerHTML = '';

//     result.forEach(song => {
//       let artistName = document.createElement('p');
//       let monthlyPeeps = document.createElement('p');
//       artistName.innerText = song.artist;
//       monthlyPeeps.innerText = song.monthlyListeners;
//       dataDiv.appendChild(artistName);
//       dataDiv.appendChild(monthlyPeeps);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// recordBtn.addEventListener('click', () => {
//   trackBtnClick += 1;
//   console.log(trackBtnClick);
//   songFetch();
// });


const recordBtn = document.getElementById('record-btn');
let trackBtnClick = -1;
const dataDiv = document.getElementById('data-container');
const url = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '32c60e1b81mshf734d0f60eb527cp1a7e82jsnd97cef222b63',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  }
};

async function songFetch() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Clear existing data before appending new data
    dataDiv.innerHTML = '';

    result.forEach(song => {
      let songContainer = document.createElement('div');
      songContainer.className = 'song-container';

      let artistName = document.createElement('p');
      let monthlyPeeps = document.createElement('p');
      artistName.innerText = song.artist;
      monthlyPeeps.innerText = `Monthly Listeners: ${song.monthlyListeners}`;

      songContainer.appendChild(artistName);
      songContainer.appendChild(monthlyPeeps);
      dataDiv.appendChild(songContainer);
    });
  } catch (error) {
    console.error(error);
  }
}

recordBtn.addEventListener('click', () => {
  trackBtnClick += 1;
  console.log(trackBtnClick);
  songFetch();
});
