

export const getEnvVariables = () => {

    import.meta.env;

    return {
        ...import.meta.env // apuntes con los otros archivos
    }
}