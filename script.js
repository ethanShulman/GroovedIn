const clientId = "5c7b82de4a714178908280886138635b";
const clientSecret = "e6f93f6a61cc43fe9943c4baca443641";

// Function to obtain an access token
const getAccessToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const basicAuthHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

    const options = {
        method: "POST",
        headers: {
            "Authorization": basicAuthHeader,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    };

    const response = await fetch(tokenUrl, options);
    const data = await response.json();
    return data.access_token;
};

// Function to search for a track using the access token and display data on the webpage
const searchTrackAndDisplayData = async (trackName) => {
    const accessToken = await getAccessToken();
    const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(trackName)}&type=track`; // Search for a track
    const apiDataContainer = document.getElementById("spotify-container");

    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        // Clear existing content
        apiDataContainer.innerHTML = "";

        // Display the first track result or an error message
        if (data.tracks && data.tracks.items.length > 0) {
            const track = data.tracks.items[0];
            const trackInfo = `
                <h2>Track: ${track.name}</h2>
                <p>Artist(s): ${track.artists.map(artist => artist.name).join(", ")}</p>
                <p>Album: ${track.album.name}</p>
                <p>Release Date: ${track.album.release_date}</p>
                <img src="${track.album.images[0].url}" alt="${track.album.name}" width="150">
            `;
            apiDataContainer.innerHTML = trackInfo;
        } else {
            apiDataContainer.innerHTML = "<p>No track found.</p>";
        }
    } catch (error) {
        console.error(error);
    }
};

// Example: Call the function with a specific track name
const trackName = "2000s Baby"; // Replace with the desired track name
searchTrackAndDisplayData(trackName);
