import {useRouter} from 'next/router'

const slug =()=>{

    const router = useRouter()

    console.log(router.query)
    const {slug} = router.query

    return <p>Post:{slug}</p>
}
export default slug;



