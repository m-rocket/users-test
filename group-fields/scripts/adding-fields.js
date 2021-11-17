const $fieldsHolder = document.getElementById("fields-holder")

for (let i = 0; i < 40; i++) {
    const name = i === 4 ? '---Группа 1---' : (i === 8 ? '---/Группа 1---' :`Поле ${i+1}`)

    const $el = document.createElement('div')
    $el.classList.add('linked-form__field')
    $el.innerHTML = `
<div class="linked-form__field__label">
    <span>${name}</span>
</div>
<div class="linked-form__field__value ">
    <input name="CFV[${i}]" class="text-input" type="text" placeholder="..." spellcheck="false" autocomplete="off">
</div>
`
    $fieldsHolder.appendChild($el)
}