import Task from '../models/task.model'

const controller = {
  getTaskList: async function(request, h) {
    return [
      { done: false, text: 'Hello' },
      { done: true, text: 'World' }
    ];
  },
  
}

export default controller