const submitForm = document.getElementById('input_profile');
const editButton = document.getElementById('edit');

const STORAGE_KEY = 'PROFILE';


let profile = {
    nama : document.querySelector('.title').firstElementChild.innerHTML,
    role : document.querySelector('.title').lastElementChild.innerHTML,
    availability : document.getElementById('availability').lastElementChild.innerHTML,
    age : document.getElementById('usia').lastElementChild.innerHTML,
    lokasi : document.getElementById('lokasi').lastElementChild.innerHTML,
    yearExperience : document.getElementById('pengalaman').lastElementChild.innerHTML,
    email : document.getElementById('email').lastElementChild.innerHTML
};


// ketika window di load
window.addEventListener('load', function(){
    memuatDataDariStorage();
    // Ketika Edit button di klik 
    editButton.addEventListener('click', function(){
        // tampilkan data profile ke form
        tampilkanDataKeForm(memuatDataDariStorage())
    });

    // ketika di submit
    submitForm.addEventListener('submit', function(event){    
        let formData = ambilDataForm(event);
        
        // perbarui profile section
        perbaruiProfile(formData);
        simpanData()
        event.preventDefault();
        submitForm.reset();
    });

    // Ambil Data Dari Form
    function ambilDataForm(e){
        const elements = e.target.elements;
        let formData = [];
        //ambil semua value yang di input
        for(let el of elements){
            // cek apakah element input
            if(el.tagName === 'INPUT'){
                // masukan ke formData
                formData.push(el.value);
            }
        }
        return formData;
    }

    function simpanData(){
        const parsed = JSON.stringify(profile);
        localStorage.setItem(STORAGE_KEY, parsed);
        memuatDataDariStorage()
        alert('Data Berhasil Disimpan');
    }

    function memuatDataDariStorage(){
        const dataBerseri = localStorage.getItem(STORAGE_KEY);
        let data = JSON.parse(dataBerseri);
        if(data !== null){
            document.querySelector('.title').firstElementChild.innerHTML = data.nama;
            document.querySelector('.title').lastElementChild.innerHTML = data.role;
            document.getElementById('availability').lastElementChild.innerHTML = data.availability;
            document.getElementById('usia').lastElementChild.innerHTML = data.age;
            document.getElementById('lokasi').lastElementChild.innerHTML = data.lokasi;
            document.getElementById('pengalaman').lastElementChild.innerHTML = data.yearExperience;
            document.getElementById('email').lastElementChild.innerHTML = data.email;
        }
        let dataArray = Object.values(data);
        return(dataArray);
    }
    

    // Update UI Profile
    function perbaruiProfile(data){
        let [nama, role, availability, age, lokasi, yearExperience, email] = data;
        
        profile.nama = document.getElementsByClassName('title')[0].firstElementChild.innerHTML = nama;
        profile.role = document.getElementsByClassName('title')[0].lastElementChild.innerHTML = role;
        profile.availability = document.getElementById('availability').lastElementChild.innerHTML = availability;
        profile.age = document.getElementById('usia').lastElementChild.innerHTML = age;
        profile.lokasi = document.getElementById('lokasi').lastElementChild.innerHTML = lokasi;
        profile.yearExperience = document.getElementById('pengalaman').lastElementChild.innerHTML = yearExperience;
        profile.email = document.getElementById('email').lastElementChild.innerHTML = email;
    }

    // Menampilkan Data Ke Form
    function tampilkanDataKeForm(data){
        let Data=[];
        for(let i =0; i <= 6; i++){
            Data.push(data[i]);
        }
        let [title, role, availability, usia, lokasi, pengalaman, email] = Data;
       

        let form_nama = document.getElementById('input_nama').value = title;
        let form_role = document.getElementById('input_role').value = role;
        let form_availability = document.getElementById('input_availability').value = availability;
        let form_usia = document.getElementById('input_age').value = usia;
        let form_lokasi = document.getElementById('input_lokasi').value = lokasi;
        let form_pengalaman = document.getElementById('input_yearExperience').value = pengalaman;
        let form_email = document.getElementById('input_email').value = email;
    }
});