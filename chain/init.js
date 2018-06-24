const IntervalCache = require('./lib/interval-cache')

module.exports = async function () {
  app.logger.info('enter dapp init')

  app.registerContract(1000, 'score.add')
  //app.registerContract(1001, 'score.query')
  //app.registerContract(1004, 'score.report')

  app.setDefaultFee('1', 'dataengine.SCC')

  //app.custom.cache = new IntervalCache(10 * 1000)
}
