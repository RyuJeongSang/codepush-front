import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useQuery_AppList } from "hooks/reactQueries/query_appManage"

const Home = () => {
    const { data: appData } = useQuery_AppList()
    const appList = appData?.data;

    return (
        <main>
            <p>home</p>

            {appList?.apps?.map(item => (
                <button style={{ display: 'flex' }}>
                    <div>
                        <p>{item.name}</p>
                    </div>
                </button>
            ))}
        </main>
    )
}

export default Home