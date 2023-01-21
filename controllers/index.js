const express = require("express"),
	session = require("express-session"),
	router = express.Router()

// configure routers
router.use("/app", require("./page"))
router.use("/goapi", require("./theme"), require("./asset"), require("./movie"), require("./character"), require("./tts"), require("./waveform"))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'fucler',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

module.exports = router
