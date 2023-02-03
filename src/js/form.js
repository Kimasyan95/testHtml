const phoneField = document.querySelectorAll(".js-phone-field");

phoneField.forEach((e) => {
  Inputmask({
    mask: "+7 (999) 999-9999",
    placeholder: "_",
    clearMaskOnLostFocus: true,
  }).mask(e);
});

const forms = document.querySelectorAll(".js-form");

forms.forEach((item) => {
  bindPostData(item);
});

function successModal() {
  const successModal = document.querySelector("#successModal");
  const modal = bootstrap.Modal.getOrCreateInstance(successModal);

  modal.show();

  setTimeout(function () {
    modal.hide();
  }, 3000);
}

function hideFormModal(form) {
  const callModal = form.closest("#callModal") || null;

  if (!callModal) {
    return false;
  } else {
    const modal = bootstrap.Modal.getInstance(callModal);
    modal.hide();
  }
}

function validate(name, phone) {
  let error = "";
  const nameMessage = "Имя должно состоять минимум из 2 символов\n";
  const phoneMessage = "Поле номер телефона обязательно к заполнению\n";

  if (name.value.length < 2) {
    error += nameMessage;
  }

  if (phone.value.replace(/[^\d]/g, "").length < 11) {
    error += phoneMessage;
  }

  if (error.length > 0) {
    alert(error);
    return false;
  }

  return true;
}

function sendRequest(form, name, phone) {
  form.classList.add("send");
  
  const data = {
    name: name.value,
    phone: phone.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => {
    form.classList.remove("send");
    form.reset();
    hideFormModal(form);
    successModal();
  });
}

function bindPostData(form) {
  const phone = form.querySelector(".js-form-phone");
  const name = form.querySelector(".js-form-name");
  const accept = form.querySelector(".js-form-accept") || null;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.classList.contains("send")) {
      return false;
    }

    if (accept && !accept.checked) {
      return false;
    }

    if (validate(name, phone)) {
      sendRequest(form, name, phone);
    }
  });
}
