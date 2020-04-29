export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No posts yet!</div>

export const Failure = ({ error }) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </article>
  ))
}