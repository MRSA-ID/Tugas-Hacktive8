const submitForm = document.getElementById('input_profile');
const profileSection = document.getElementById('profile-section');
const STORAGE_KEY = 'PROFILE';
let dataStorage;

const inputNama = document.getElementById('input_nama');
const inputRole = document.getElementById('input_role');
const inputAvailability = document.getElementById('input_availability');
const inputAge = document.getElementById('input_age');
const inputLokasi = document.getElementById('input_lokasi');
const inputExperience = document.getElementById('input_yearExperience');
const inputEmail = document.getElementById('input_email');





window.addEventListener('load', function(){
    
    // pertamakali diload akan memuat data dari storage
    if(apakahStorageTersedia()){
        memuatDataDariStorage();
    }

    // Function untuk mengecek ketersediaan storage
    function apakahStorageTersedia(){
        if(typeof(Storage) === undefined){
            alert("Browser anda tidak mendukung lokal Storage")
            return false;
        }
        return true;
    }

    // Ketika Disubmit
    submitForm.addEventListener('submit', function(e){
        let formData = ambilDataForm(e);
        // e.preventDefault();
        perbaruiDataStorage(formData);
    });

    // Function Perbarui Data Storage
    function perbaruiDataStorage(data){
        if(apakahStorageTersedia()){
            simpanData(data);
        }
    }

    // function Ambil Data Form
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

    // Function Simpan Data Ke STORAGE
    function simpanData(profile){
        // Convert arr to obj
        let dataConvert = convertArr(profile)
        const data = JSON.stringify(dataConvert);
        localStorage.setItem(STORAGE_KEY, data);
        console.log('data berhasil disimpan');
        memuatDataDariStorage();
    }

    // Function Memuat data dari storage
    function memuatDataDariStorage(){
        const dataBerseri = localStorage.getItem(STORAGE_KEY);
        dataStorage = JSON.parse(dataBerseri);
        if(dataStorage !== null){
            disPlay(profileSection,uiProfileDisplay(dataStorage));
            disPlay(profileSection,uiProfileDetails(dataStorage));
        }
    }
    
    function disPlay(DisplayAppend, fungsi){
        return DisplayAppend.innerHTML += fungsi
    }

    // Function UI Profile
    function uiProfileDisplay(profile){
        let button = buttonEdit();
        return `<section class="profile-display cf">
                    <section class="profile-picture">
                        <img src="ppicture (rama).jpeg" alt="" >
                    </section>
                    <div class="title">
                        <h1>${profile.nama}</h1>
                        <p>${profile.role}</p>
                    </div>
                    <div class="buttons">
                        ${button}
                        <button class="resume">Resume</button>
                    </div>
                </section>`
    }

    // Function display profileDetails
    function uiProfileDetails(profile){
        return `<section class="profile-details">
                    <table>
                        <tr id="availability">
                            <th >Availability</th>
                            <td >${profile.availability}</td>
                        </tr>
                        <tr id="usia">
                            <th>Usia</th>
                            <td>${profile.age}</td>
                        </tr>
                        <tr id="lokasi">
                            <th>Lokasi</th>
                            <td>${profile.lokasi}</td>
                        </tr>
                        <tr id="pengalaman">
                            <th>Pengalaman</th>
                            <td>${profile.yearExperience}</td>
                        </tr>
                        <tr id="email">
                            <th>Email</th>
                            <td>${profile.email}</td>
                        </tr>
                    </table>
                </section>`
    }

    // Function Button Edit
    function buttonEdit(){
        let thisButton = makeButton('edit', 'edit', 'Edit');
        return thisButton;
    }

    function tampilkanDataKeForm(dataProfile){
        // let {Nama, Role, Availability, Age, Lokasi, YearExperience, Email} = dataProfile;
        
        const profile = new Promise( resolve => {
            let data = [];
            let keys = Object.keys(dataProfile)
            keys.forEach( key => {
                data.push(dataProfile[key])
            });
            resolve(data)
        })
        profile.then( dataProfile =>{
            let [Nama, Role, Availability, Age, Lokasi, YearExperience, Email] = dataProfile;
            document.getElementById('input_nama').value = Nama;
            document.getElementById('input_role').value = Role;
            document.getElementById('input_availability').value = Availability;
            document.getElementById('input_age').value = Age;
            document.getElementById('input_lokasi').value = Lokasi;
            document.getElementById('input_yearExperience').value = YearExperience;
            document.getElementById('input_email').value = Email;
        })
    }

    // terapkan function di window
    window.myFunc = () => {
        tampilkanDataKeForm(dataStorage);
    }

    function makeButton(buttonTypeClass, buttonTypeId, text){
        const button = `<button class="${buttonTypeClass}" id="${buttonTypeId}" onclick="myFunc()">${text}</button>`
        return button;
    }

    // Function Convert arr to obj
    function convertArr(arr){
        let [Nama, Role, Availability, Age, Lokasi, YearExperience, Email] = arr;

        let dataObj={};
        dataObj.nama = Nama;
        dataObj.role = Role;
        dataObj.availability = Availability;
        dataObj.age = Age;
        dataObj.lokasi = Lokasi;
        dataObj.yearExperience = YearExperience;
        dataObj.email = Email;

        return dataObj;
    }
    makeValidation(inputNama, /[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
    makeValidation(inputRole, /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
    makeValidation(inputAvailability, /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
    makeValidation(inputAge, /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/)
    makeValidation(inputLokasi, /[A-Za-z0-9'\.\-\s\,]/)
    makeValidation(inputExperience, /^[0-9]{1,2}[:.,-]?$/)
    makeValidation(inputEmail, /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    function makeValidation(element, regex){
        element.addEventListener('input', (event) => {
            const target = event.target.value;
            if(regex.test(target)){
                element.classList.add('valid')
                element.classList.remove('invalid')
            }else{
                element.classList.add('invalid')
                element.classList.remove('valid')
            }
        })
    }
    
});
