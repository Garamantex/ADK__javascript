/* global const */
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone')
const country = document.getElementById('country');
const date = document.getElementById('date');
const product = document.getElementById('product');
const serial = document.getElementById('serial');
const regularExp = {
    name: /^[a-zA-Z\ ]{1,100}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{10}$/,
    phone2: /^\d{12}$/,
}
const FIRST_PRODUCT_AVAILABILITY = "1985-09-01";
const SECOND_PRODUCT_AVAILABILITY = "1989-09-01";
const THIRD_PRODUCT_AVAILABILITY = "1995-05-01";




const validateExtraOptions = (product) => {
    if (product.value === "v300") {
        document.getElementById('extraOptions').classList.remove('form__extra-options')
        document.getElementById('extraOptions').classList.add('form__extra-options-active')
    }else {
        document.getElementById('extraOptions').classList.remove('form__extra-options-active')
        document.getElementById('extraOptions').classList.add('form__extra-options')
    }
}

const validateDate = (date) => {
    const v100 = document.getElementById('v100');
    const v200 = document.getElementById('v200');
    const v300 = document.getElementById('v300');
    if (date >= FIRST_PRODUCT_AVAILABILITY) {
        console.log("1")
        v100.removeAttribute("disabled");
        v200.setAttribute("disabled", true);
        v300.setAttribute("disabled", true);
    }
    if (date >= SECOND_PRODUCT_AVAILABILITY) {
        console.log("2")
        v100.removeAttribute("disabled");
        v200.removeAttribute("disabled");
        v300.setAttribute("disabled", true) ;
    }
    if (date >= THIRD_PRODUCT_AVAILABILITY) {
        console.log("3")
        v100.removeAttribute("disabled");
        v200.removeAttribute("disabled");
        v300.removeAttribute("disabled");
    }
}

 

const validateField = (expresion, input, field) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${field}`).classList.remove('error')
        document.getElementById(`group__${field}`).classList.add('correct')
    } else {
        document.getElementById(`group__${field}`).classList.remove('correct')
        document.getElementById(`group__${field}`).classList.add('error')
    }
}

const validatePhone = (e) => {
    if (country.value === "1") {
        validateField(regularExp.phone, e.target, e.target.name)
    } else {
        (country.value === "2");
        validateField(regularExp.phone2, e.target, e.target.name)
    }
}

const validateSerial = (e) => {
    const { value } = e.target;
    const removeDashChar = value.split("-").join("");
    console.log(removeDashChar);
    const strToArray = removeDashChar.split("");
    const dashArray = strToArray.map((char, index) => {
        if (((index + 1) % 4) === 0 && index!==0){
            return (char + "-")
        }
        return (char)
    })
    const maskedValue = dashArray.join("");
    serial.value = maskedValue;
}


/* listeners */
name.addEventListener('keyup', (e) => {
    validateField(regularExp.name, e.target, e.target.name)
} )

email.addEventListener('keyup', (e) => {
    validateField(regularExp.mail, e.target, e.target.name)
} )

phone.addEventListener('keyup', (e) => {
    validatePhone(e);
} )

country.addEventListener('change', (e) => {
    phone.value = null;
});

product.addEventListener('change', (e) => {
    validateExtraOptions(product);
});

date.addEventListener('change', (e) => {
    validateDate(e.target.value);
});


serial.addEventListener('keyup', (e) => {
    validateSerial(e);
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
});

