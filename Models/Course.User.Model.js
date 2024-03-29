const pool = require("../Configure/config");

module.exports.getAll = (User,callBack) => {
  pool.query(
    "SELECT * FROM course C , course_student CS WHERE C.ID = CS.course_id and CS.student_id=?",
    [User.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.insert = (user, course, callBack) => {
  pool.query(
    "INSERT INTO course_student VALUES(?,?)",
    [user.ID, course.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};
