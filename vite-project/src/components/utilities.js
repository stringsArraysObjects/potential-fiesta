
export default async function dataFetching () {
    const response = await fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json", {method:"POST", mode: "no-cors"})
    const insult = JSON.stringify(response);
    const parseResult = JSON.parse(insult)
    console.log(insult)
    console.log(parseResult)
}
