import Seeder from '../seeder'
import Task from '../../src/models/task.model'

const seeder = new Seeder(Task)

seeder.run = async function() {
  for(let i = 0; i < 1; i++) {
    const task1 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "title": "MultiTask #1",
      "parent": null
    })

    const task2 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "title": "SubTask #1",
      "parent": task1
    })

    const task3 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "title": "SubTask #2",
      "parent": task1
    })

    const task4 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "title": "SubSubTask #1",
      "parent": task2
    })

    task1.subtasks.push(task2)
    task1.subtasks.push(task3)
    task2.subtasks.push(task4)

    await task1.save()
    await task2.save()
    await task3.save()
  }
}

export default seeder
