
function TampilkanData() {
    let form_el = document.querySelector("#theForm");
  
    form_el.style.display = "block";

    document.querySelector("#inputNama").value = document.querySelector("#displayNama").innerText;
    document.querySelector("#inputRole").value = document.querySelector("#displayRole").innerText;
    document.querySelector("#inputAvailability").value = document.querySelector("#displayAvailability").innerText;
    document.querySelector("#inputUsia").value = document.querySelector("#displayUsia").innerText;
    document.querySelector("#inputLokasi").value = document.querySelector("#displayLokasi").innerText;
    document.querySelector("#inputPengalaman").value = document.querySelector("#displayPengalaman").innerText;
    document.querySelector("#inputEmail").value = document.querySelector("#displayEmail").innerText;
}

function submit_form() {
    let form_el = document.querySelector("#theForm");
    
    let inputNama = document.querySelector("#inputNama");
    let inputRole = document.querySelector("#inputRole");
    let inputAvailability = document.querySelector("#inputAvailability");
    let inputUsia = document.querySelector("#inputUsia");
    let inputLokasi = document.querySelector("#inputLokasi");
    let inputPengalaman = document.querySelector("#inputPengalaman");
    let inputEmail = document.querySelector("#inputEmail");

    let displayNama = document.querySelector("#displayNama");
    let displayRole = document.querySelector("#displayRole");
    let displayAvailability = document.querySelector("#displayAvailability");
    let displayUsia = document.querySelector("#displayUsia");
    let displayLokasi = document.querySelector("#displayLokasi");
    let displayPengalaman = document.querySelector("#displayPengalaman");
    let displayEmail = document.querySelector("#displayEmail");

   
   
    displayNama.innerText = inputNama.value;
    displayRole.innerText = inputRole.value;
    displayAvailability.innerText = inputAvailability.value;
    displayUsia.innerText = inputUsia.value;
    displayLokasi.innerText = inputLokasi.value;
    displayPengalaman.innerText = inputPengalaman.value;
    displayEmail.innerText = inputEmail.value;

    form_el.style.display = "none";

    console.log(displayNama);
    console.log(displayRole);
    console.log(displayAvailability);
    console.log(displayUsia);
    console.log(displayLokasi);
    console.log(displayPengalaman);
    console.log(displayEmail);
}