

export const getEnvVariables = () => {

    // import.meta.env; da error con vite

    return {
        VITE_API_URL: import.meta.env 
    }
}