module.exports = app => {
    const controller = app.controller.tasks;

    app.route('/api/v1/tasks')
        .post(controller.createTask);
        // .get(controller.getGroups)
        // .put(controller.updateAllGroup)
        // .patch(controller.updatePartialGroup)
        // .delete(controller.deleteGroup)

}