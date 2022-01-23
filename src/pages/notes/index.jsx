import React from 'react'
import Link from 'next/link'

const Page = () => {
    const id = 1
    return (
        <div>
            <h1>Notes index path</h1>
            <Link href="/notes/[id]" as={`/notes/${id}`}>
                <a>Note {id}</a>
            </Link>
        </div>
    )
}

export default Page