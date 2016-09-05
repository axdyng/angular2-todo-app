"use strict";
var Task = (function () {
    function Task(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status || false;
    }
    Task.prototype.taskDone = function () {
        this.status = true;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map