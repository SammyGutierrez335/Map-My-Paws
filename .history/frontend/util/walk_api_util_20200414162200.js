export const createWalk = (walk) => {
    return $.ajax({
        url: '/api/walks',
        method: 'POST',
        data: { walk }
    })
}

export const fetchWalks = (authorId) => {
    return $.ajax({
        url: '/api/walks/',
        method: 'GET',
        data: { authorId }
    })
}