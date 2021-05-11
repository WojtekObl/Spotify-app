export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "3fabd9992b8f499585b62caf14358ac4";

const scopes = [
    "user-read-currently-playing", "user-read-recently-played",
    "user-read-playback-state", "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            //#access_token=BQCcXwglZfLR6pSpeXvcdl58NPp8Pal5MK8U4GQoz2Qo8_
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;