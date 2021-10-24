import { useEffect,useState } from "react"

const useFetch = (url) => {
    const [data,setBlogs] = useState(null)
    const [isLoading,setisLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController()
        setTimeout(() => {
        fetch(url,{signal:abortCont.signal})
        .then((res)=>{
            if(!res.ok){
                throw Error('Unable to fetch data from server')
            }
            return res.json()
        })
        .then((data)=>{
            setBlogs(data)
            setisLoading(false)
            setError(null)
        })
        .catch((e)=>{
            if(e.name === 'AbortError' ){
                console.log('fetch aborted')
            }
            else{
                setError(e.message)
                setisLoading(false)
            } 
        })

        },1000);

    return () => abortCont.abort();
    },[url])
    return {data,isLoading,error}
}
 
export default useFetch;