
export default async function fetchApi(endpoint: string, payload: any){
    try{
        payload.cache = 'no-store'
        const data = await fetch(window.origin + "/api/" +endpoint, payload);
        return data.json()
    }catch(e){
        return e
    }
}