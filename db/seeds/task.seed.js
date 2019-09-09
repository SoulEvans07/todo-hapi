import Seeder from '../seeder'
import Task from '../../src/models/task.model'

const seeder = new Seeder(Task)

seeder.run = async function() {
  for(let i = 0; i < 1; i++) {
    const task1 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "text": "MultiTask #1",
      "parent": null
    })

    const task2 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "text": "SubTask #1",
      "parent": null
    })

    const task3 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "text": "SubTask #2",
      "parent": null
    })

    const task4 = await this.model.create({
      "tags": [],
      "subtasks": [],
      "done": false,
      "text": "SubSubTask #1",
      "parent": null
    })

    task1.subtasks.push(task2)
    task2.parent = task1
    task1.subtasks.push(task3)
    task3.parent = task1
    task2.subtasks.push(task4)
    task4.parent = task2

    await task1.save()
    await task2.save()
    await task3.save()
    await task4.save()
  }
}

export default seeder
