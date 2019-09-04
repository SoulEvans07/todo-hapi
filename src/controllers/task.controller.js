import Task from '../models/task.model'

const controller = {
  getTaskList: async function(request, h) {
    const task_list = await Task.find().exec();
    return task_list;
  },

}

export default controller