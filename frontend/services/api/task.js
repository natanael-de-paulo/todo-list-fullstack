async function createTask(data) {
  try {
    await fetch(`${baseUrl}/f5cf004a-ae91-4794-a741-fef7472db3e0/tasks`, {
      headers: headersSecurity,
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

async function deleteTask(taskId) {
  try {
    await fetch(
      `${baseUrl}/f64f2d59-f2ea-4bbd-846e-d48f9c6501e2/tasks/${taskId}`,
      {
        headers,
        method: 'DELETE'
      }
    )
  } catch (error) {
    console.log(error)
  }
}

async function getTasks() {
  try {
    await fetch(`${baseUrl}/f5cf004a-ae91-4794-a741-fef7472db3e0/tasks`, {
      headers: headersSecurity,
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setTaskArrayData(data)
      })
  } catch (error) {
    console.log(error)
  }
}

getTasks()

async function updateTask(taskId) {
  try {
    await fetch(
      `${baseUrl}/f64f2d59-f2ea-4bbd-846e-d48f9c6501e2/tasks/${taskId}`,
      {
        headers,
        method: 'DELETE'
      }
    )
  } catch (error) {
    console.log(error)
  }
}
