import { useState, useEffect } from "react"; 
 
const useFetch = (url, method = "GET") => { 
  const [data, setData] = useState(null); 
  const [isPending, setIsPending] = useState(false); 
  const [error, setError] = useState(null); 
  const [options, setOptions] = useState(null); 

 
  const postData = (postDataJson) => { 
    setOptions({ 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(postDataJson), 
    }); 
  }; 
 
  useEffect(() => { 
    const controller = new AbortController(); 
 
    const fetchData = async (fetchOptions) => { 
      setIsPending(true); 
 
      try { 
        const res = await fetch("http://localhost:3000" + url, { 
          ...fetchOptions, 
          signal: controller.signal, 
        }); 
        if (!res.ok) { 
          throw new Error(res.statusText); 
        } 
        const data = await res.json(); 
 
        setIsPending(false); 
        setData(data); 
        setError(null); 
      } catch (err) { 
        if (err.name === "AbortError") { 
          console.log("the fetch was aborted"); 
        } else { 
          setIsPending(false); 
          setError("Could not fetch the data"); 
        } 
      } 
    }; 
 
    // invoke the function 
    if (method === "GET") { 
      fetchData(); 
    } 
    if (method === "POST" && options) { 
      fetchData(options); 
    } 
 
    return () => { 
      controller.abort(); 
    }; 
  }, [url, method, options]); 
 
  return { data, isPending, error, postData }; 
}; 
 
export default useFetch;