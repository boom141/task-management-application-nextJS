export default async function fetchApi(endpoint: string, payload: any = {}){
    try{
        payload.next = {revalidate: 3600}
        const data = await fetch(window.origin + "/api/" +endpoint, payload);
        return data.json()
    }catch(e){
        return e
    }
}