const verbos = [
    ["be", "was/were", "been"],
    ["begin", "began", "begun"],
    ["break", "broke", "broken"],
    ["bring", "brought", "brought"],
    ["buy", "bought", "bought"],
    ["catch", "caught", "caught"],
    ["choose", "chose", "chosen"],
    ["come", "came", "come"],
    ["do", "did", "done"],
    ["drink", "drank", "drunk"],
    ["drive", "drove", "driven"],
    ["eat", "ate", "eaten"],
    ["fall", "fell", "fallen"],
    ["feel", "felt", "felt"],
    ["find", "found", "found"],
    ["fly", "flew", "flown"],
    ["forget", "forgot", "forgotten"],
    ["get", "got", "got"],
    ["give", "gave", "given"],
    ["go", "went", "gone"],
    ["have", "had", "had"],
    ["hear", "heard", "heard"],
    ["know", "knew", "known"],
    ["learn", "learnt/learned", "learnt/learned"],
    ["leave", "left", "left"],
    ["make", "made", "made"],
    ["meet", "met", "met"],
    ["pay", "paid", "paid"],
    ["read", "read", "read"],
    ["run", "ran", "run"],
    ["say", "said", "said"],
    ["see", "saw", "seen"],
    ["sell", "sold", "sold"],
    ["send", "sent", "sent"],
    ["sing", "sang", "sung"],
    ["sit", "sat", "sat"],
    ["sleep", "slept", "slept"],
    ["speak", "spoke", "spoken"],
    ["spend", "spent", "spent"],
    ["stand", "stood", "stood"],
    ["take", "took", "taken"],
    ["teach", "taught", "taught"],
    ["tell", "told", "told"],
    ["think", "thought", "thought"],
    ["understand", "understood", "understood"],
    ["wear", "wore", "worn"],
    ["win", "won", "won"],
    ["write", "wrote", "written"]
];

const ruleta = document.getElementById('ruleta');
const verboDisplay = document.getElementById('verbo');
const countdownDisplay = document.getElementById('countdown');
const girarBtn = document.getElementById('girarBtn');
const revelarBtn = document.getElementById('revelarBtn');

let countdownInterval;
let remainingTime;

girarBtn.addEventListener('click', () => {
    ruleta.classList.add('girar');
    countdownDisplay.textContent = "";
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * verbos.length);
        const selectedVerbo = verbos[randomIndex];
        const randomFormIndex = Math.floor(Math.random() * 3);
        verboDisplay.textContent = selectedVerbo[randomFormIndex];
        
        remainingTime = 10; // 10 segundos
        countdownDisplay.textContent = ` ${remainingTime}s`;

        countdownInterval = setInterval(() => {
            remainingTime -= 1;
            countdownDisplay.textContent = ` ${remainingTime}s`;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                verboDisplay.textContent = `${selectedVerbo[0]} - ${selectedVerbo[1]} - ${selectedVerbo[2]}`;
                countdownDisplay.textContent = "";
                ruleta.classList.remove('girar');
            }
        }, 1000);
    }, 500); // Duración de la animación de giro
});

revelarBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    const displayedVerbo = verboDisplay.textContent.split(' ')[0]; // Obtener la forma mostrada
    const selectedVerbo = verbos.find(verb => verb.includes(displayedVerbo)); // Encontrar el verbo completo
    if (selectedVerbo) {
        verboDisplay.textContent = `${selectedVerbo[0]} - ${selectedVerbo[1]} - ${selectedVerbo[2]}`;
        countdownDisplay.textContent = "";
        ruleta.classList.remove('girar');
    }
});
