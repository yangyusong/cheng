async function getScoreByName(options) {

  let scores = await app.model.Score.findAll({
    limit: options.limit || 50,
    offset: options.offset || 0
    //,
    //name: options.name
    //,
    //sort: { timestamp: -1 }
  })
  return { scores: scores }
}


app.route.get('/scores', async (req) => {
  let query = req.query
  if (!query.sortBy) {
    query.sortBy = 'score'
  }


  let res = null
  res = await getScoreByName(query)
  return res
})

app.route.get('/score/:id', async (req) => {
  let id = req.params.id

  let score = await app.model.Score.findOne({
    condition: { name: id }
  })
  if (!score) throw new Error('score not found')

  let result = { score: score }
  return result
})


