const express = require('express');
const router = express.Router();

const Activity = require('../../models/Activity');
const date = require('../../models/Date');

router.post('/addActivities', (req, res) => {
  date.findOneAndUpdate({date: req.body.date}, {
      "$push": {
        "timespan": req.body.timespan,
        "activities": req.body.activities
      }
    }, {new : true})
    .then(date => {
      res.json({
        date: {
          date : date.date
        }
      })
    })
    .catch(err => {
      if(req.body.date != null && req.body.activities != null && req.body.timespan != null) {
        //Creates new date object
        const newDate = new date({
          date : req.body.date,
          activities : req.body.activities,
          timespan : req.body.timespan
        })

        //The date is saved in the date collection
        newDate.save().then(date => {
          res.json({
            date: {
              date : date.date
            }
          })
        });
      }
      else {
        res.json({msg: "missing fields"});
      }
    })
})

router.post('/getActivities', (req, res) => {
  date.findOne({date: req.body.date})
    .then(date => {
      Activity.find()
        .then((activities) => {
          activityList = [];
          for(let i = 0; i < date.activities.length; i++) {
            for(let j = 0; j < activities.length; j++) {
              if(activities[j].activity == date.activities[i]) {
                activityList.push([activities[j], date.timespan[i]]);
              }
            }
          }
          res.send(activityList);
        })
        .catch((err) => {
          res.status(404).json({msg : "error"})
        })
      })
    .catch(err => {
      res.json({msg : "error"})
    })
});

module.exports = router;
