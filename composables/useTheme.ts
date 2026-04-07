// composables/useTheme.ts
export const useTheme = () => {
    const colorMode = useColorMode()

    const toggleTheme = () => {
        // colorMode.preference pode ser 'system', 'light' ou 'dark'
        // Se estiver no system, decidimos para onde ir com base no valor real atual
        colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
    }

    return {
        theme: computed(() => colorMode.value),
        preference: computed(() => colorMode.preference),
        toggleTheme
    }
}