
module.exports = {
  add: async function (name, timestamp, recorder, time, subject, score, comments1) {//
    //if (!name || !time || !subject || !score ) {
    //  return 'lose name or time or subject or score'
    //}

    app.sdb.create('Score', {
      name: name,
      timestamp: timestamp || ''
      ,
      recorder: recorder || '',
      id: app.autoID.increment('score_max_id'),
      time: time,
      subject: subject,
      score: parseInt(score),
      comments: comments1
    })

  }

}
