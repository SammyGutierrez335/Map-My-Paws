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
        data: { authorId }
    })
}


//hits