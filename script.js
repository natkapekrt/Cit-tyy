function randomGen(){

    const arr = [
    "Kdo chce, hledá způsob. Kdo nechce, hledá důvod.",
    "Pokud máš odvahu říci „sbohem“, život tě obdaří novým „vítej“.",
    "Největší dárek, který můžeš někomu dát, je tvůj čas, tvá pozornost a tvoje láska.",
    "Činy mluví hlasitěji než slova.",
    "Jsou lidé, díky kterým je svět krásnější prostě jen proto, že tu jsou.",
    "Každý den nemusí být krásný, ale na každém dni něco krásného je.",
    "Život začíná tam, kde končí strach.",
    "Upřímní lidé mají jednu obrovskou výhodu. Nemusejí si pamatovat, co komu řekli.",
    "Láska není to, co říkáte. Láska je to, co děláte.",
    "Arogance je parukou k zakrytí duševní pleše. ",
    "Když na někoho ukážu prstem, tři prsty ukazují zpátky na mě. ",


]

const random1 = arr[(Math.floor(Math.random()*(arr.length)))];
document.getElementById("outputGen").innerHTML = random1
console.log(random1);

}