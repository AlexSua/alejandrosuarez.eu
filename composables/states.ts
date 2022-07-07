export const useDarkMode = () => {
    return useState<boolean>('dark-mode', () => {
        return true;
    })
}