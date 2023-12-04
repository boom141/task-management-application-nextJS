
export default async function fetchApi(endpoint: string, payload: any){
    try{
        const data = await fetch(window.origin + "/api/" +endpoint, payload);
        console.log(data);
        return data.json()
    }catch(e){
        return e
    }
}