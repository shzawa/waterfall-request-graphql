import { GraphQLClient } from "graphql-request"

export const findReposQuery = /* qgl */`
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`

export type FindReposQueryType = {
  user: {
    login: string
    name: string
    location: string
    avatarUrl: string
    repositories: {
      totalCount: number
      nodes: { name: string }[]
    }
  }
}

export const gqlGithubClient = new GraphQLClient(
  'https://api.github.com/graphql',
  {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_TOKEN}`
    }
  }
)
