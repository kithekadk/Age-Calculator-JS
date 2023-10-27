let age_form = document.querySelector('.age-form')

let date = document.getElementById('dateinput')
let month = document.getElementById('monthinput')
let year = document.getElementById('yearinput')


age_form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let state = date.value != '' && month.value != '' && year.value != ''

    let this_date = new Date().getDate()
    let this_month = (new Date().getMonth())+1
    let this_year = new Date().getFullYear()

    if(state){
        let age_days = this_date - date.value
        let age_month = this_month - month.value
        let age_year = this_year - year.value

        if(age_month < 0){
            age_month = age_month + 12
            age_year = age_year - 1
        }
        
        console.log(age_days);
        console.log(age_month);
        console.log(age_year);
    }




})