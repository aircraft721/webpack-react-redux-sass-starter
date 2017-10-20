
export const add = () => {
    return {
        type: 'INCREMENT'
    }
}

export const remove = (count) => {
    return {
        type: 'DECREMENT'
    }
}