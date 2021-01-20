"use strict"

var search_button = document.getElementsByClassName('search');

var visitButton = document.getElementById("visit")

var formEl = document.querySelector('form');

var visitModal = document.getElementById('VisitModal');

var add_button = document.getElementById('add');

var modal = document.getElementById('AddModal');

var clientBlock = document.getElementById("add-img-client");

var objectBlock = document.getElementById("add-img-object");

var dealBlock = document.getElementById("add-img-deal");

var blockTextClient = document.getElementById('client-text');

var blockTextObject = document.getElementById('object-text');

var blockTextDeal = document.getElementById('deal-text');

var noticeModal = document.getElementById("noticeModal")

var sellerClientsBlock = document.getElementById('visit-seller-button');
var bauyerClientsBlock = document.getElementById('visit-bauyer-button');
var landlordClientsBlock = document.getElementById('visit-landlord-button'); 
var employerClientsBlock = document.getElementById('visit-employer-button');
var objectsSelectBlock = document.getElementById('visit-form-object-select');
var objectAdressBlock = document.getElementById('visit-form-object-adress');
var rentComissionBlock = document.getElementById('visit-form-rent-comission');
var saleComissionBlock = document.getElementById('visit-form-sale-comission');
var rentContactsBlock = document.getElementById('rent-contacts');
var saleContactsBlock = document.getElementById('sale-contacts');
var rentMontsSpan = document.getElementById('visit-rent-month');
var flatBlock = document.getElementById('visit-flat');
var roomBlock = document.getElementById('visit-room');
var comercialContacts = document.getElementById('comercial-contacts');


document.addEventListener

formEl.addEventListener('reset', function (event) {
    if (!confirm("Вы уверены, что хотите очистить форму?"))
        event.preventDefault();
});

function changeStyle(inputBlock) {
    inputBlock.stle.border = "1px solid #3E8CE0";
}

function CloseVisitModal() {
    visitModal.style.display = "none";
}

function OpenVisitModal() {
    visitModal.style.display = "block";
}

function VisitClick() {
    visitButton.src = 'img/visit_active.svg';
};

function CloseNoticeModal() {
    noticeModal.style.display = "none";
}

function OpenNoticeModal() {
    noticeModal.style.display = "block";
}

function CloseAddModal() {
    modal.style.display = "none";
}

function OpenAddModal() {
    modal.style.display = "grid";
}

function AddClick() {
    add_button.src = 'img/add_active.svg';
}

function clientBlockHover() {
    clientBlock.src = "img/client_hover.svg"
    blockTextClient.style.color = "#3E8CE0"
}

function clientBlockOut() {
    clientBlock.src = "img/client.svg"
    blockTextClient.style.color = "white"
}


function objectBlockHover() {
    objectBlock.src = "img/object_hover.svg"
    blockTextObject.style.color = "#3E8CE0"
}

function objectBlockOut() {
    objectBlock.src = "img/object.svg"
    blockTextObject.style.color = "white"
}


function dealBlockHover() {
    dealBlock.src = "img/personal_results_hover.png"
    blockTextDeal.style.color = "#3E8CE0"
}

function dealBlockOut() {
    dealBlock.src = "img/personal_results.png"
    blockTextDeal.style.color = "white"
}

function closeHeader() {
    document.getElementById("header-id").style.display = "none";
}

function openSearch() {
    document.getElementById("search-block").style.display = "inline-block";
}

function searchFocus() {
    document.getElementById('input-search').focus()
}

function searchClear() {
    document.getElementById('input-search').value = ""
}

function openHeader() {
    document.getElementById("header-id").style.display = "block";
}

function closeSearch() {
    document.getElementById("search-block").style.display = "none";
}

     
function saleOpen() {
    sellerClientsBlock.style.display = 'inline-block';
    bauyerClientsBlock.style.display = 'inline-block';
    saleComissionBlock.style.display = 'inline-block';
    saleContactsBlock.style.display = 'inline-block';
    landlordClientsBlock.style.display = 'none';
    employerClientsBlock.style.display = 'none';
    rentComissionBlock.style.display = 'none';
    rentContactsBlock.style.display = 'none';
    rentMontsSpan.style.display = 'none';
}
    
function rentOpen() {
    sellerClientsBlock.style.display = 'none';
    bauyerClientsBlock.style.display = 'none';
    saleComissionBlock.style.display = 'none';
    saleContactsBlock.style.display = 'none';
    landlordClientsBlock.style.display = 'inline-block';
    employerClientsBlock.style.display = 'inline-block';
    rentComissionBlock.style.display = 'inline-block';
    rentContactsBlock.style.display = 'inline-block';
    rentMontsSpan.style.display = 'inline-block';
}
    
function residentalBlock() {
    flatBlock.style.display = 'inline-block';
    roomBlock.style.display = 'none';
}
    
function comercialBlock() {
    flatBlock.style.display = 'none';
    roomBlock.style.display = 'inline-block';
    
}

function openObjectSelect() {
    objectsSelectBlock.style.display = 'inline-block';
    objectAdressBlock.style.display = 'none';
    objectsSelectBlock.style.width = '80%';
    objectsSelectBlock.style.marginBottom = '18px';
}

function openObjectAdress() {
    objectsSelectBlock.style.display = 'none';
    objectAdressBlock.style.display = 'inline-block';
}    

