export const createWalk = (walk) => {
    return $.ajax({
        url: '/api/walks',
        method: 'POST',
        data: { walk }
    })
}
//data is a param that is passed to backend

export const fetchWalks = (authorId) => {
    return $.ajax({
        url: '/api/walks/',
        method: 'GET',
    })
}

export const updateWalk = (id) => {
    return $.ajax({
        url: '/api/walks/:id',
        method: 'PATCH',
        data: {id}
    })
}

//hits backend