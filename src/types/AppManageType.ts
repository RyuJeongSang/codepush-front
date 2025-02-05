interface Response_Apps {
    apps: {
        name: string
        collaborators: {
            [K: string]: {
                isCurrentAccount: boolean
                permission: 'Owner' | 'Contributor'
            }
        }
        deployments: string[]
    }[]
}