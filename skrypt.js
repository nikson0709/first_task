document.getElementById("przeslij").addEventListener("click", function () {
    const imie = document.getElementById("imie").value.trim();
    const nazwisko = document.getElementById("nazwisko").value.trim();
    const zgloszenie = document.getElementById("zgloszenie").value.trim();
    const regulamin = document.getElementById("regulamin").checked;
    const komunikat = document.getElementById("komunikat");

    if (!regulamin) {
        komunikat.textContent = "Musisz zapoznać się z regulaminem";
        komunikat.style.color = "red";
    } else {
        komunikat.innerHTML = `${imie.toUpperCase()} ${nazwisko.toUpperCase()}<br>Treść Twojej sprawy: ${zgloszenie}`;
        komunikat.style.color = "Navy";
    }
});