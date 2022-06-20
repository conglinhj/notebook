const users = [
  { id: 1, name: 'Linh', age: 29 },
  { id: 2, name: 'MAnh', age: 21 },
];

const usersController = {
  index: function (req, res, next) {
    res.render('users/index', {
      title: 'List of users',
      users: users
    });
  },
  show: function (req, res, next) {
    res.render('users/show', {
      title: 'User details',
      user: users.filter(u => u.id == req.params.id)[0]
    });
  },
}

module.exports = usersController;
