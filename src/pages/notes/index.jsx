import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
    const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `Note: ${i}` }))

    return (
        <div>
            <h1>Notes</h1>

            {notes.map(note => (
                <div>
                    <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                        <a>
                            <strong>{note.title}</strong>
                        </a>
                    </Link>
                </div>
            ))}
            <br></br>
            <button onClick={e => router.push('/')}>
                Home
            </button>
        </div>
    )
}

export default Page