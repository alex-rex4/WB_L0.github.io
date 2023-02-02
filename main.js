let emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
let phoneReg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let indexReg = /\d{6}/;
let flag = false






function validateEmail(){
    if((!emailReg.test(document.getElementById('email').value))&&((document.getElementById('email').value)!="")) {
            document.getElementById('recipient-data-email-error').classList.add('recipient-data-error-show')
        }else{
            document.getElementById('recipient-data-email-error').classList.remove('recipient-data-error-show')
        }
}

function validatePhone(){
    if((!phoneReg.test(document.getElementById('phone').value))&&((document.getElementById('phone').value)!="")) {
            document.getElementById('recipient-data-phone-error').classList.add('recipient-data-error-show')
        }else{
            document.getElementById('recipient-data-phone-error').classList.remove('recipient-data-error-show')
        }
}

function validateIndex(){
    if((!indexReg.test(document.getElementById('index').value))&&((document.getElementById('index').value)!="")) {
            document.getElementById('recipient-data-index-error').classList.add('recipient-data-error-show')
        }else{
            document.getElementById('recipient-data-index-error').classList.remove('recipient-data-error-show')
        }
}

function generateInscription(e, q){

    console.log("sfsfsdfsf")
    if(document.getElementById(e).value!==""){
        document.getElementById(q).classList.add('show')
    }else{
        document.getElementById(q).classList.remove('show')
    }
}

function submit(){
    flag = true;
    if(((document.getElementById('name').value)=="")) {
        document.getElementById('recipient-data-name-error').classList.add('recipient-data-error-show');
        document.getElementById('name').classList.add('error-input-text');
        flag = false;
    }else{
        document.getElementById('recipient-data-name-error').classList.remove('recipient-data-error-show')
        document.getElementById('name').classList.remove('error-input-text');
    }

    if(((document.getElementById('surname').value)=="")) {
        document.getElementById('recipient-data-surname-error').classList.add('recipient-data-error-show');
        document.getElementById('surname').classList.add('error-input-text');
        flag = false;
    }else{
        document.getElementById('recipient-data-surname-error').classList.remove('recipient-data-error-show');
        document.getElementById('surname').classList.remove('error-input-text');
    }


    if((!emailReg.test(document.getElementById('email').value))||((document.getElementById('email').value)=="")) {
        document.getElementById('recipient-data-email-error').classList.add('recipient-data-error-show');
        document.getElementById('email').classList.add('error-input-text');
        flag = false;
    }else{
        document.getElementById('recipient-data-email-error').classList.remove('recipient-data-error-show');
        document.getElementById('email').classList.remove('error-input-text');
    }

    if((!phoneReg.test(document.getElementById('phone').value))||((document.getElementById('phone').value)=="")) {
        document.getElementById('recipient-data-phone-error').classList.add('recipient-data-error-show');
        document.getElementById('phone').classList.add('error-input-text');
        flag = false;
    }else{
        document.getElementById('recipient-data-phone-error').classList.remove('recipient-data-error-show');
        document.getElementById('phone').classList.remove('error-input-text');
    }

    if((!indexReg.test(document.getElementById('index').value))||((document.getElementById('index').value)=="")) {
        document.getElementById('recipient-data-index-error').classList.add('recipient-data-error-show');
        document.getElementById('index').classList.add('error-input-text');
        flag = false;
    }else{
        document.getElementById('recipient-data-index-error').classList.remove('recipient-data-error-show');
        document.getElementById('index').classList.remove('error-input-text');
    }

    if (flag == true){
        alert('Успех!')
    }else{
        alert('Заполните поля верно!')
    }
}

function selectAll(){
    if (document.getElementById('select-all').checked) {
        document.getElementById('select-goods-1').checked=true;
        document.getElementById('select-goods-2').checked=true;
        document.getElementById('select-goods-3').checked=true;
    } else {
        document.getElementById('select-goods-1').checked=false;
        document.getElementById('select-goods-2').checked=false;
        document.getElementById('select-goods-3').checked=false;
    }
    updateSum()
}

function payAtOnce(){
   
    if (document.getElementById('pay-at-once').checked) {
        document.getElementById('total-pay').innerHTML='Заказать '+document.getElementById('total-value').innerHTML
    } else {
        document.getElementById('total-pay').innerHTML='Заказать'
    }
} 

function updateSum(){
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let goods1Price = 0;
    let goods2Price = 0;
    let goods3Price = 0;

    if(document.getElementById('select-goods-1').checked){
        goods1Price = parseInt(document.getElementById('price-goods-1').innerHTML.replace(/[^\d]/g, ''))
    }else{
        goods1Price = 0;  
    }
    if(document.getElementById('select-goods-2').checked){
        goods2Price = parseInt(document.getElementById('price-goods-2').innerHTML.replace(/[^\d]/g, ''))
    }else{
        goods2Price = 0;  
    }
    if(document.getElementById('select-goods-3').checked){
        goods3Price = parseInt(document.getElementById('price-goods-3').innerHTML.replace(/[^\d]/g, ''))
    }else{
        goods3Price = 0;  
    }
    document.getElementById('total-value').innerHTML= numberWithSpaces(goods1Price + goods2Price + goods3Price) + ' сом';

    payAtOnce()
}

function closeDialog(id){
    document.getElementById(id).classList.remove('dialog-show');
}

function openDialog(id){
    document.getElementById(id).classList.add('dialog-show');
}

function generateHeader (id, headerId) {
    if (document.getElementById(id).value=="") {
        document.getElementById(headerId).classList.remove('show');
    } else {
        document.getElementById(headerId).classList.add('show');
    }
   
}