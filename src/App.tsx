import { useEffect, useState } from 'react';
import './App.css';
import { List } from './common/components/List';
import { findReposQuery, FindReposQueryType, gqlGithubClient } from './github/client/graphql';
import { UserDetails } from './github/components/GithubUser';
import { SearchForm } from './github/components/SearchForm';

const App = () => {
  const [login, setLogin] = useState('')
  const [userData, setUserData] = useState<FindReposQueryType['user']>()

  useEffect(() => {
    if (!login) return
    gqlGithubClient
      .request<FindReposQueryType>(findReposQuery, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error)
  }, [login])

  if (!userData) return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <p>Loading...</p>
    </>
  )

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  )
}

export default App;
