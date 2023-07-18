const forms = document.forms

let taskArray = []
function setTaskArrayData(data) {
  taskArray = data
  showDataOnScreen(taskArray)
}

forms.createTaskForm.addEventListener('submit', async event => {
  event.preventDefault()
  const nameInputValue = forms.createTaskForm.name.value
  if (nameInputValue) {
    const data = {
      name: nameInputValue
    }

    const taskCreated = await createTask(data)
    taskArray.push(taskCreated)
    showDataOnScreen()
  } else {
    alert('Erro: Preencha o campo!')
  }
})

const list = document.getElementById('taskList')

let editTask = true

function showDataOnScreen(taskArray = []) {
  taskArray.forEach((task, index) => {
    list.insertAdjacentHTML(
      'afterbegin',
      `
        <tr class="task-container" id=${task.taskId}>
          <td>
            ${editTask ? `<input type="text" value="${index + 1}">` : index + 1}
          </td> 
          <td>
            ${editTask ? `<input type="text" value="${task.name}">` : task.name}
          </td>
          <td>
            ${
              editTask
                ? `<select name="status" id="status">
                    <option value="PENDING">Pendente</option>
                    <option value="IN_PROGRESS">Em progresso</option>
                    <option value="DONE">Concluído</option>
                  </select>`
                : task.status
            }
          </td>
          <td>
            <div class="wrapper-action-task">
              <button class="action-task edit-action data-id="${task.taskId}"">
                <img src="../../public/images/icon-delete.svg" />
                Editar
              </button>
      
              <button class="action-task delete-action" data-id="${
                task.taskId
              }">
                <img src="../../public/images/icon-delete.svg" />
                Excluir
              </button>
            </div>
          </td>
        </tr>
      `
    )
  })

  const btnsActionDelete = document.getElementsByClassName('delete-action')
  const btnsActionEdit = document.getElementsByClassName('edit-action')

  for (let i = 0; i < taskArray.length; i++) {
    const dataIdTaskBtnDelete = btnsActionDelete[i].dataset.id
    const dataIdTaskBtnEdit = btnsActionEdit[i].dataset.id

    btnsActionDelete[i].addEventListener('click', e => {
      deleteTask(dataIdTaskBtnDelete)
      document.getElementById(dataIdTaskBtnDelete).remove()
    })

    btnsActionEdit[i].addEventListener('click', e => {
      taskIdBeingEdited = dataIdTaskBtnEdit
    })
  }
}
