const express = require('express');
const router = express.Router();

const Activity = require('../../models/Activity');

router.post('/newActivity', (req, res) => {
  //Creates new acitvity object
  const newActivity = new Activity({
    activity: req.body.activity,
    description: req.body.description
  });

  newActivity.save().then(activity => {
    res.json({
      activity: {
        activity : activity.activity,
        description : activity.description
      }
    });
  })
});

module.exports = router;
