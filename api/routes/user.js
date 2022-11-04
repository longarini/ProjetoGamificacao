module.exports = app => {
    const controller = app.controller.user;

    app.route('/api/v1/user')
        .post(controller.createUser)

    app.route('/api/v1/login')
        .post(controller.login)
}