import { PostDetailContainer, PostDetailContent } from './styles'

export function PostDetail() {
  return (
    <PostDetailContainer className="container">
      <PostDetailContent>
        <h3>Programming languages all have built-in data structures</h3>
        <p>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
        <h4>Dynamic typing</h4>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
