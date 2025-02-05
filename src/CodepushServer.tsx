import axios, { AxiosInstance } from "axios";

const CODEPUSH_SERVER_URL = process.env.REACT_APP_CODEPUSH_SERVER || ''

let CodePushAxios: AxiosInstance;

class CodepushServer {
    static get url () {
        return this.#serverUrl
    }
    static #serverUrl = CODEPUSH_SERVER_URL;

    static initServer = () => {
        console.log(this.#serverUrl)
        CodePushAxios = getAxiosInstanceByURL(this.#serverUrl);
    }
}

const getAxiosInstanceByURL = (baseURL: string) => {
    const axiosInstance = axios.create({
        baseURL: baseURL,
        timeout: 10000,
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_CODEPUSH_TOKEN}`
        }
    });

    return axiosInstance;
};

export { CodePushAxios, CodepushServer }