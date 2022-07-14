

export const userinfo = ( user ) => {
    return {
        type: 'FETCH',
        payload: user
    }
}

export const location = ( loc ) => {
    return {
        type: 'LOCAL',
        payload: loc
    }
}

export const popup = ( pop ) => {
    return {
        type: 'POP',
        payload: pop
    }
}

export const popupstatus = ( sta ) => {
    return {
        type: 'STATUS',
        payload: sta
    }
}

export const userchange = ( sta ) => {
    return {
        type: 'CHANGE',
        payload: sta
    }
}