export const useDarkMode = () => {
    return useState<boolean>('dark-mode', () => {
        if (process.client) {
            let result = useLocalStorage('dark-mode')
            if (result && result == "false")
                return false
            return true
        }else{
            return true;
        }
    })
}