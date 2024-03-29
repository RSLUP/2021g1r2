const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
require("dotenv").config();

const ProfileRouter = require("./routes/Profile");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/Users");
const UserAdminRouter = require("./routes/Users.Admin");
const CourseRouter = require("./routes/Course");
const QuizRouter = require("./routes/Quiz");
const CourseUserRouter = require("./routes/Course.User");
const QuizUserRouter = require("./routes/Quiz.User");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(passport.initialize());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/profile", ProfileRouter);
app.use("/admin", UserAdminRouter);
app.use("/course", CourseRouter);
app.use("/quiz", QuizRouter);
app.use("/completeCourse", CourseUserRouter);
app.use("/completeQuiz", QuizUserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
