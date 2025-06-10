function showElement(modeNumber) {
    console.log(modeNumber)
    if (modeNumber == 1){
        document.getElementById('modal-days').style.display = 'flex';
    }

    else if (modeNumber == 2){
        document.getElementById('modal-love').style.display = 'flex';
    }

    else if (modeNumber == 3){
        document.getElementById('modal-which').style.display = 'flex';
    }

    else if (modeNumber == 4){
        document.getElementById('modal-knight').style.display = 'flex';
    }

    else if (modeNumber == 5){
        document.getElementById('modal-watchmen').style.display = 'flex';
    }

    else if (modeNumber == 6){
        document.getElementById('modal-leap').style.display = 'flex';
    }

    else if (modeNumber == 7){
        document.getElementById('modal-aesthete').style.display = 'flex';
    }

    else if (modeNumber == 8){
        document.getElementById('modal-sister').style.display = 'flex';
    }
}

function hideElement(modeNumber){
    if (modeNumber == 1){
        document.getElementById('modal-days').style.display = 'none';
    }

    else if (modeNumber == 2){
        document.getElementById('modal-love').style.display = 'none';
    }

    else if (modeNumber == 3){
        document.getElementById('modal-which').style.display = 'none';
    }

    else if (modeNumber == 4){
        document.getElementById('modal-knight').style.display = 'none';
    }

    else if (modeNumber == 5){
        document.getElementById('modal-watchmen').style.display = 'none';
    }

    else if (modeNumber == 6){
        document.getElementById('modal-leap').style.display = 'none';
    }

    else if (modeNumber == 7){
        document.getElementById('modal-aesthete').style.display = 'none';
    }

    else if (modeNumber == 8){
        document.getElementById('modal-sister').style.display = 'none';
    }
}