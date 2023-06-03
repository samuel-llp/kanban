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
        let list = document.getElementById('list-item')

        list.innerHTML += `<li>
        ${input.value}<button id='btn-del' onclick='removeItem("${input.value}")'>
        <i class="ph ph-check"></i>
        </button></li>`
    }
    input.value = ""   
}
showValues()

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    console.log(values);
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    let list = document.getElementById('list-item')
    list.innerHTML = '';
    showValues()
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    console.log(values)
    let list = document.getElementById('list-item')

    values.forEach(element => {
    
            list.innerHTML += `<li>
            ${element.name}<button listName='${element.name}' id='btn-del' onclick='removeItem("${element.name}")'>
            <i class="ph ph-check"></i>
            </button></li>`   
    });
}