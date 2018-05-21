const size = 10

module.exports = async function (ctx, next) {
    const { mysql } = require('../qcloud')
    const { page, search, ids } = ctx.query
    if (ids) {
        ctx.body = await mysql('expression').whereIn('id', ids.split(','))
    } else if (!page) {
        ctx.body = []
    } else if (search) {
        ctx.body = await mysql('expression').where('title', 'like', `%${search}%`).limit(size).offset(size * page)
    } else {
        ctx.body = await mysql('expression').limit(size).offset(size * page)
    }
}
