module.exports = app => {
    const controller = app.controller.groups;

    app.route('/api/v1/groups')
        .post(controller.createGroup);
        // .get(controller.getGroups)
        // .put(controller.updateAllGroup)
        // .patch(controller.updatePartialGroup)
        // .delete(controller.deleteGroup)

}