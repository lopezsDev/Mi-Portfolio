export const getRepositories = async (token) => {
    try {
        const response = await fetch('https://api.github.com/users/lopezsDev/repos', {
            headers: {
                'Authorization': `token ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener los repositorios');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los repositorios:', error);
        throw error;
    }
};