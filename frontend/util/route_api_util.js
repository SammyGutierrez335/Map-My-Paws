export const createRoute = () => {
    return $.ajax({
        url: '/api/routes',
        method: 'POST',
    })
}