const form = document.forms.namedItem('login')
let it = document.querySelector('select')
let add = document.querySelector('.add')
let modal = document.querySelector('.modal');
let span = document.querySelector('.close')

form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false
    let second_error = false
    let user = {

    }

    fm.forEach((val, key) => {
        user[key] = val

        if (val.length === 0) {
            error = true
        }

        if (it.value === "not") {
            second_error = true;
        }
    })


    if (error ===  true) {
        alert('Fill all fields')
        return
    }


    if (second_error === true) {
        alert('choose the option')
        return
    }

    console.log(user , 'Через 10 лет ты станешь профессионалом в '+ it.value);
   
}


