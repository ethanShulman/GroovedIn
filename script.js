// // Function for the api lyric search
// function dateApiFunc() {
//     let date = "2023-08-10";
// // Setting variable for api url
// let apiUrl = `https://billboard-api2.p.rapidapi.com/hot-100?date=${date}&range=1-10`;
// let options = {headers: {
//     'X-RapidAPI-Key': 'd17394ccc1mshee0c1a995db6e10p18d818jsne9e96816334f',
//     'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
//     }
// }

// // Fetching api
// fetch(apiUrl, options)
// .then(response => {
//     if (!response.ok) {
//         throw new Error("Network response is not ok");
//     } else {
//     return response.json();
// }
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error("Fetch error: ", error);
// })

// }

const dateAPIFunc = async(date) =>{
    const url = `https://billboard-api2.p.rapidapi.com/hot-100?date=${date}&range=1-10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd17394ccc1mshee0c1a995db6e10p18d818jsne9e96816334f',
            'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
dateAPIFunc("2019-05-11");