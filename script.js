function gerar() {

let num = document.getElementById('txt1')
let tab = document.getElementById('seltab')
if (num.value.length == 0) {
    alert(`por favor digite um numero!`)
} else {
    let n = Number(num.value)
    tab.innerHTML = ''
   for (let c = 1; c <=10; c ++) {
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab ${c}`
    tab.appendChild(item)
   }

}


}