/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function note({ note }) {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>{note.title}</h1>
      <h3>ID: {note.id}</h3>
    </div>
  )
}

export async function getServerSideProps ({ params, req, res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)
  
  if (!response.ok) {
    console.error('⚠ Response not ok', response.statusText)
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
