import axios from "axios";

const APIKEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});

export const getId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=)([^#\\&\\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    }

    return null
};

export const getVideoInfoFromUrl = async (id: string) => {
    return await instance.get(
        `/videos?part=snippet&id=${id}&fields=items/snippet/title,items/snippet/description&key=${APIKEY}`
    );
}