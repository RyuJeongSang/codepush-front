import { CodePushAxios } from "CodepushServer"

export const processGetAppList = () => {
    return CodePushAxios.get('apps')
}