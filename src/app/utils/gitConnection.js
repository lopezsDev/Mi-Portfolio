export const getRepositories = async (token) => {
    const response = await fetch('https://github.com/lopezsDev?tab=repositories', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}