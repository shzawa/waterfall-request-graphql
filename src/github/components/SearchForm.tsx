import { useInput } from "../../common/hooks/useInput"

type SearchFormProps = {
  value: string
  onSearch: (value: string) => void
}
export const SearchForm: React.FC<SearchFormProps> = ({ value, onSearch }) => {
  const [searchProps] = useInput(value)

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSearch(searchProps.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        {...searchProps}
        placeholder='login id...'
        required
      />
      <button>Search</button>
    </form>
  )
}
