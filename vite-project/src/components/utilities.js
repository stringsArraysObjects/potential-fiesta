import { get } from "jquery";

export default async function dataFetching () {

    const response = await fetch("HTTP/1.1 200 OK Access-Control-Allow-Origin: http://evilinsult.com/generate_insult.php?lang=en&type=json")
  
     const insult = JSON.stringify(response);
     const parseResult = JSON.parse(insult)
    console.log(insult)
    console.log(parseResult)
}
