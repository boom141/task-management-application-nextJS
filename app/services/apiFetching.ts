export const fetcher = (url:string) => fetch(url).then((res) => res.json());

export const fetchApi = async (url: string, method: boolean, data?: any) => {
    const payload = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: method ? 'POST' : 'GET',
        body: JSON.stringify(data)
    }

    return await fetch(`${window.origin}/api/${url}`, payload).then(r => r.json());
  };