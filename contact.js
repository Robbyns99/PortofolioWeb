const scriptURL = 'https://script.google.com/macros/s/AKfycbx5AbR6yzkVO0jkpgZLc5mcksTXiqqSNubsbB1j8fPGSPtthQbW6o4VECdPgQm101143A/exec'
const form = document.forms['Kontak-ku-Portofolio']
// nama form jangan menggunakan spasi
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
  e.preventDefault()

  // Ketika tombol submit klik
  btnLoading.classList.toggle('d-none')
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnKirim.classList.toggle('d-none')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none')
      btnKirim.classList.toggle('d-none')
      // Tampilkan alert
      myAlert.classList.toggle('d-none')
      // reset form
      form.reset()
      console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))
})