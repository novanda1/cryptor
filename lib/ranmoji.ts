export default async function randomEmoji(): Promise<string> {
    const res = await fetch('https://api.github.com/emojis').then(resp => resp.json())
    return res
}