export const fetcher = (url:string) => fetch(url).then((res) => res.json());

export  async function fetchApi(endpoint: string, payload: any = {}){
    try{
        payload.cache = 'no-store'
        payload.next = {revalidate: 3600}
        const data = await fetch(window.origin + "/api/" +endpoint, payload);
        return data.json()
    }catch(e){
        return e
    }
}
