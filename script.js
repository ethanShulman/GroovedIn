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

// const dateAPIFunc = async(date) => {
//     const apiData = document.getElementById("billboard-container");

//     apiData.innerText = apiData;

//     apiData.appendChild("billboard-container");

//     const url = `https://billboard-api2.p.rapidapi.com/hot-100?date=${date}&range=1-10`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'd17394ccc1mshee0c1a995db6e10p18d818jsne9e96816334f',
//             'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);

    
//     }
// }
// dateAPIFunc();

// const dateAPIFunc = async (date) => {
//     try {
//         const apiDataContainer = document.getElementById;("billboard-container");

//         // Clear the existing content of the container
//         apiDataContainer.innerHTML = "";

//         // Create a new paragraph element to display the fetched data
//         const resultParagraph = document.createElement("p");
//         apiDataContainer.appendChild(resultParagraph);

//         const url = `https://billboard-api2.p.rapidapi.com/hot-100?date=${date}&range=1-10`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'd17394ccc1mshee0c1a995db6e10p18d818jsne9e96816334f',
//                 'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
//             }
//         };

//         const response = await fetch(url, options);
//         const responseData = await response.json(); // Use json() to parse the response as JSON

//         // Modify the paragraph's content to display the fetched data
//         resultParagraph.innerText = JSON.stringify(responseData, null, 2);
//     } catch (error) {
//         console.error(error);
//     }
// }

// Call the function with a specific date
const currentDate = '2023-08-14'; // Replace with the desired date


const dateAPIFunc = async (date) => {
    try {
        const apiDataContainer = document.getElementById("billboard-container");

        const inputBox = document.getElementById("chart-text-box");
        date = inputBox.value;
        
        // Create a new container element for each fetched data
        const dataContainer = document.createElement("div");
        dataContainer.className = "data-container";

        const url = `https://billboard-api2.p.rapidapi.com/hot-100?date=${date}&range=1-10`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '54d7f10307mshf57da4501ff2029p1462b9jsnd9b04a80d7fc',
                'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log("data", responseData.songs);

        // Format the fetched data and insert it into the data container
        // const dataHTML = `
        //     <h2>${date} Billboard Hot 100</h2>
        //     // <ul>
        //     //     ${responseData.songs.map(song => `<li>${song.title} - ${song.artist}</li>`).join("")}
        //     // </ul>
        // `;
        dataContainer.innerHTML = dataHTML;

        // Append the data container to the main apiDataContainer
        apiDataContainer.appendChild(dataContainer);
    } catch (error) {
        console.error(error);
    }
}

// Array of dates for which you want to fetch and display data
const datesToFetch = ['2023-08-14', '2023-08-07', '2023-07-31']; // Add more dates as needed

// Call dateAPIFunc for each date
// for (const date of datesToFetch) {
//     dateAPIFunc(date);
// }




//Target the div with get element by id
//assign the variable a value with either innerText or innerHTML
//then append the varible  to the div that you want the data to appear in

