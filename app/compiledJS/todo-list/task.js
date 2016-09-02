"use strict";
var Task = (function () {
    function Task(title, checked) {
        this.title = title;
        this.checked = checked || false;
    }
    Task.prototype.taskChecked = function () {
        this.checked = true;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map