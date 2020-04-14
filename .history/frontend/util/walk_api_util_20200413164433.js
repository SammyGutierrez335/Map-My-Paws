export const createWalk = (walk) => {
    return $.ajax({
        url: '/api/walks',
        method: 'POST',
        data: { walk }
    })
}