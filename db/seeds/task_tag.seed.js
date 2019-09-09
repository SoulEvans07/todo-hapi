import Seeder from '../seeder'
import TaskTag from '../../src/models/task_tag.model'

const data = [
  {
    "name": "vue",
    "color": "#ffffff",
    "background": "#4fc08d"
  },
  {
    "name": "react",
    "color": "#ffffff",
    "background": "#5dbdd8"
  }
]

export default new Seeder(TaskTag, data)
