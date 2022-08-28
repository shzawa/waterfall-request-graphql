import { FindReposQueryType } from "../client/graphql"

export const UserDetails: React.FC<FindReposQueryType['user']> = (user) => {
  return (
    <div className="githubUser">
      <img
        src={user.avatarUrl}
        alt={user.login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{user.login}</h1>
        {user.name && <p>{user.name}</p>}
        {user.location && <p>{user.location}</p>}
      </div>
    </div>
  )
}
