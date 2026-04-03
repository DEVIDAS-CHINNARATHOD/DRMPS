/* ══════════════════════════════════════════════
   Dr. Ramarao Maharaj Primary School
   Enquiry Form Handler — enquiry.js
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = document.getElementById('name').value.trim();
    var phone   = document.getElementById('phone').value.trim();
    var cls     = document.getElementById('classInt').value;
    var hostel  = document.getElementById('hostel').value;
    var message = document.getElementById('message').value.trim();

    /* Basic validation */
    if (!name) { showError('Please enter your full name.'); return; }
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      showError('Please enter a valid 10-digit Indian mobile number.'); return;
    }
    if (!cls) { showError('Please select the class you are interested in.'); return; }

    /* Hide error, show success */
    document.getElementById('formError').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';

    /* Reset form */
    form.reset();

    /* Scroll success into view */
    document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  function showError(msg) {
    var el = document.getElementById('formError');
    el.textContent = '⚠ ' + msg;
    el.style.display = 'block';
    document.getElementById('formSuccess').style.display = 'none';
  }
});
