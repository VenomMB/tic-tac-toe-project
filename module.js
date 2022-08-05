function checkresult(list) {
    for (let i = 0; i < 9; i += 3) {
        if (list[i].value != null && (list[i].value == list[i + 1].value && list[i].value == list[i + 2].value)) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (list[i].value != null && (list[i].value == list[i + 3].value && list[i].value == list[i + 6].value)) {
            return true;
        }
    }
    for (let i = 0; i < 1; i++) {
        if (list[i].value != null && (list[i].value == list[i + 4].value && list[i].value == list[i + 8].value)) {
            return true;
        }
    }
    for (let i = 2; i > 1; i--) {
        if (list[i].value != null && (list[i].value == list[i + 2].value && list[i].value == list[i + 4].value)) {
            return true;
        }
    }
    return false;



}
export {checkresult};