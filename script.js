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


const dateAPIFunc = async(date) =>{
    const apiDataContainer = document.getElementById("billboard-container");

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
        // Clear existing content
        apiDataContainer.innerHTML = "";

        // Create a new <pre> element to display the JSON data
        const jsonElement = document.createElement("pre");
        jsonElement.innerText = JSON.stringify(result, null, 2);

        // Append the <pre> element to the container
        apiDataContainer.appendChild(jsonElement);

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
dateAPIFunc("2019-05-11");





//Target the div with get element by id
//assign the variable a value with either innerText or innerHTML
//then append the varible  to the div that you want the data to appear in

