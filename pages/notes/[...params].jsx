import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
        <div>Note with multiple params</div>
    )
}



export default Page