function changeSpin() {
    if (document.getElementById("spin-element").classList.contains('spinA')) {

        document.getElementById("spin-element").classList.remove('spinA');
        document.getElementById("spin-element").classList.add('spinB');
    } else {
        document.getElementById("spin-element").classList.remove('spinB');
        document.getElementById("spin-element").classList.add('spinA');
    }
}