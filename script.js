const localStorageKey = 'to-do-list-gn'

function validateIfExistNewTask()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-text').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true

}

function newTask()
{
    let input = document.getElementById('input-text')
    input.style.border = ""

    if(!input.value)
    {
        input.style.border = "2px solid red"
        alert('Digite o nome do paciente')
    }
    else if(validateIfExistNewTask())
    {
        alert('Já existe um paciente com este nome')
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }
    input.value = ""
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('list-item')
    list.innerHTML = ''
    for(let i = 0; 1 < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-del' onclick='removeItem("${values[i]['name']}")'><i class="ph ph-x"></i></button></li>`
    }
}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

showValues()