export const envVars = () => {
    import.meta.env;

    return {
        ...import.meta.env
    }
}