let talents = {}

const getTalent = () => {
    return Object.values(talents)
}

const createTalent = (talent) => {
    if( talents[talent.id] ){
        return false
    } else{
        talents[talent.id] = talent
        return true
    }
}

module.exports = { getTalent, createTalent}

