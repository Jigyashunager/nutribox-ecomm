export default {
    NAME: /^[a-zA-Z ]+$/,
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    ADDRESS: /^[a-zA-Z0-9\s,'-]*$/,
    PINCODE: /^\d{6}$/,
    MOBILE: /^\d{5}([ ']?\d{5})$/,
    YEARS: /^\d{4}([/']?\d{4})$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z0-9]+$/,
    PANCARD: /^([a-zA-Z]){5}(\d){4}([a-zA-Z]){1}$/,
    WEBSITE: /^((https?):\/\/)?[a-z-0-9]+(\.[a-z-0-9]{2,}){1,3}$/,
    NUMBER: /^\d*$/,
    SCL_NAME: /^[A-Za-z0-9_-]*$/, //for standard,division and group crud
    HOUSE_NAME: /^[A-Za-z0-9 _-]*$/
}