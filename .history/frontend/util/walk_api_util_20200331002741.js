export const createWalk = () => {
    return $.ajax({
        url: '/api/walks',
        method: 'POST',
    })
}