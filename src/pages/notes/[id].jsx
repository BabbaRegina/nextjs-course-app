import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            
            <Link href="/notes">
                <a>Back to Notes</a>
            </Link>
            
            <h1>Note: {id} </h1>

            <button onClick={e => router.push('/')}>
                Home
            </button>
        </div>
    )
}



export default Page