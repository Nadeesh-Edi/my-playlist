const spotifyBase: string = "https://open.spotify.com/search/"
const youtubeBase: string = "https://www.youtube.com/results?search_query="

export const getSpotifyUrl = (title: string): string => {
    const searchParam: string = encodeURIComponent(title);
    return `${spotifyBase}${searchParam}`
}

export const getYoutubeUrl = (title: string): string => {
    const searchParam: string = title.replace(/ /g, "+")
    return `${youtubeBase}${searchParam}`
}