/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ note }) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>{note.title}</h1>
      <h3>ID: {note.id}</h3>
    </div>
  )
}

export async function getServerSideProps ({ params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
  
  if (!response.ok) {
    console.log('⚠ Response not ok', response.statusText)
    res.writeHead(302, { Location: '/notes' })
    res.end()

    return {
      props: {}
    }
  }

  const { data } = await response.json()

  return {
    props: { note: data }
  }
}
