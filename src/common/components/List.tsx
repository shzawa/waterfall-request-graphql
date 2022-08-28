type ListProps<T> = {
  data: T[]
  renderItem: React.FC<T>
  renderEmpty?: JSX.Element
}

export const List = <T, >({ data = [], renderItem, renderEmpty = <></> }: ListProps<T>) => {
  if (!data.length) return renderEmpty
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
