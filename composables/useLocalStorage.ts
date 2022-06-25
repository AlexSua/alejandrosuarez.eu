export default function useLocalStorage(key: string, value?: string): void | string {
    if(process.client)
        if (value)
            localStorage.setItem(key, value)
        else
            return localStorage.getItem(key)
    return null
}