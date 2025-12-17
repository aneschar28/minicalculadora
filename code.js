const slider = document.getElementById("slider");

const labeltop75 = document.getElementById("label-top-75");
const labeltop2_75 = document.getElementById("label-top2-75");
const labeltop80 = document.getElementById("label-top-80");
const labeltop2_80 = document.getElementById("label-top2-80");
const labeltop90 = document.getElementById("label-top-90");
const labeltop2_90 = document.getElementById("label-top2-90");
const labeltop = document.getElementById("label-top");
const labeltop2 = document.getElementById("label-top2");
const labelBottom = document.getElementById("label-bottom");
const labelBottom2 = document.getElementById("label-bottom2");

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");
const valor4 = document.getElementById("valor4");

const button = document.getElementById("button");
const deletebotton = document.getElementById("delete");

// Rotorazer
const rotorazerBasic = document.getElementById("rotorazerBasic");
const rotorazerPlatinum = document.getElementById("rotorazerPlatinum");

// Salud y Suplementos
const ingestibles = document.getElementById("ingestibles");
const ingestiblesplus = document.getElementById("ingestiblesplus");
const beflexible = document.getElementById("beflexible");
const superthotics = document.getElementById("superthotics");
const walkfitPlatinum = document.getElementById("walkfitPlatinum");

// AirDoctor Unidades
const ad1000 = document.getElementById("ad1000");
const ad2000 = document.getElementById("ad2000");
const ad3500 = document.getElementById("ad3500");
const ad3500i = document.getElementById("ad3500i");
const ad4000 = document.getElementById("ad4000");
const ad5500 = document.getElementById("ad5500");
const ad5500i = document.getElementById("ad5500i");

// Filtros AD 1000
const ad1000set = document.getElementById("ad1000set");

// Filtros AD 2000
const ad2000OneYearComboPack = document.getElementById("ad2000OneYearComboPack");
const ad2000TwoYearComboPack = document.getElementById("ad2000TwoYearComboPack");
const ad2000Hepa = document.getElementById("ad2000Hepa");
const ad2000Carbon = document.getElementById("ad2000Carbon");
const ad2000Prefilter = document.getElementById("ad2000Prefilter");

// Filtros AD 3000 / 3500
const ad3000OneYearComboPack = document.getElementById("ad3000OneYearComboPack");
const ad3000TwoYearComboPack = document.getElementById("ad3000TwoYearComboPack");
const ad3000Hepa = document.getElementById("ad3000Hepa");
const ad3000Carbon = document.getElementById("ad3000Carbon");
const ad3000Prefilter = document.getElementById("ad3000Prefilter");

// Filtros AD 4000
const ad4000set = document.getElementById("ad4000set");

// Filtros AD 5000 / 5500
const ad5000OneYearComboPack = document.getElementById("ad5000OneYearComboPack");
const ad5000TwoYearComboPack = document.getElementById("ad5000TwoYearComboPack");
const ad5000Hepa = document.getElementById("ad5000Hepa");
const ad5000Carbon = document.getElementById("ad5000Carbon");
const ad5000Prefilter = document.getElementById("ad5000Prefilter");

function calcular2() {
    slider.value = valor4.value;

    labeltop90.innerHTML = `${(Number(valor2.value) * 0.90).toFixed(2)}%`;
    labeltop2_90.innerHTML = `${(Number(valor1.value) * 0.90).toFixed(2)}$`;

    labeltop80.innerHTML = `${(Number(valor2.value) * 0.80).toFixed(2)}%`;
    labeltop2_80.innerHTML = `${(Number(valor1.value) * 0.80).toFixed(2)}$`;

    labeltop75.innerHTML = `${(Number(valor2.value) * 0.75).toFixed(2)}%`;
    labeltop2_75.innerHTML = `${(Number(valor1.value) * 0.75).toFixed(2)}$`;

    labeltop.innerHTML = `${(Number(valor2.value) * 1).toFixed(2)}%`;
    labeltop2.innerHTML = `${(Number(valor1.value) * 1).toFixed(2)}$`;

    labelBottom.innerHTML = `0%`;
    labelBottom2.innerHTML = `0$`;

    slider.value = 0;
    labelBottom.style.left = "0px";
    labelBottom2.style.left = "0px";
}

function calcular() {
    if (Number(valor2.value) > 100) {
        alert("el total no puede ser mas del 100%");
    }

    const ok = [valor1.value, valor2.value, valor3.value, valor4.value]
        .filter(Boolean).length;

    if (ok === 3) {

        if (valor4.value === "") {
            valor4.value = ((Number(valor2.value) * Number(valor3.value)) / Number(valor1.value)).toFixed(2);
        }

        if (valor3.value === "") {
            valor3.value = ((Number(valor1.value) * Number(valor4.value)) / Number(valor2.value)).toFixed(2);
        }

        if (valor2.value === "") {
            valor2.value = ((Number(valor1.value) * Number(valor4.value)) / Number(valor3.value)).toFixed(2);
        }

        if (valor1.value === "") {
            valor1.value = ((Number(valor2.value) * Number(valor3.value)) / Number(valor4.value)).toFixed(2);
        }

        labeltop90.innerHTML = `${(Number(valor2.value) * 0.90).toFixed(2)}%`;
        labeltop2_90.innerHTML = `${(Number(valor1.value) * 0.90).toFixed(2)}$`;

        labeltop80.innerHTML = `${(Number(valor2.value) * 0.80).toFixed(2)}%`;
        labeltop2_80.innerHTML = `${(Number(valor1.value) * 0.80).toFixed(2)}$`;

        labeltop75.innerHTML = `${(Number(valor2.value) * 0.75).toFixed(2)}%`;
        labeltop2_75.innerHTML = `${(Number(valor1.value) * 0.75).toFixed(2)}$`;

        labeltop.innerHTML = `${(Number(valor2.value) * 1).toFixed(2)}%`;
        labeltop2.innerHTML = `${(Number(valor1.value) * 1).toFixed(2)}$`;

        labelBottom.innerHTML = `${valor4.value}%`;
        labelBottom2.innerHTML = `${valor3.value}$`;

        slider.value = valor4.value;

        const value = slider.value;
        const sliderWidth = slider.offsetWidth;
        const thumbPos = (value / slider.max) * sliderWidth;

        labelBottom.innerHTML = `${value}%`;
        labelBottom2.innerHTML = `${Number(((value / 100) * Number(valor1.value)).toFixed(2))}$`;

        labelBottom.style.left = thumbPos + "px";
        labelBottom2.style.left = thumbPos + "px";

    } else if (ok === 2) {
        calcular2();
    }
}

function updateLabels() {
    const value = slider.value;
    const sliderWidth = slider.offsetWidth;
    const thumbPos = (value / slider.max) * sliderWidth;

    labeltop2.innerHTML = Number(valor1.value) === 0 ? "0" : valor1.value;
    labelBottom.innerHTML = `${value}%`;
    labelBottom2.innerHTML = `${Number(((value / 100) * Number(valor1.value)).toFixed(2))}$`;

    labelBottom.style.left = thumbPos + 20 + "px";
    labelBottom2.style.left = thumbPos + 20 + "px";
}

function buttonSkip(numeros) {
    valor1.value = numeros;
    valor2.value = "100";
    valor3.value = "";
    valor4.value = "";

    labeltop90.innerHTML = `${(Number(valor2.value) * 0.90).toFixed(2)}%`;
    labeltop2_90.innerHTML = `${(Number(valor1.value) * 0.90).toFixed(2)}$`;

    labeltop80.innerHTML = `${(Number(valor2.value) * 0.80).toFixed(2)}%`;
    labeltop2_80.innerHTML = `${(Number(valor1.value) * 0.80).toFixed(2)}$`;

    labeltop75.innerHTML = `${(Number(valor2.value) * 0.75).toFixed(2)}%`;
    labeltop2_75.innerHTML = `${(Number(valor1.value) * 0.75).toFixed(2)}$`;

    labeltop.innerHTML = `${(Number(valor2.value) * 1).toFixed(2)}%`;
    labeltop2.innerHTML = `${(Number(valor1.value) * 1).toFixed(2)}$`;

    slider.value = "0";
    labelBottom.style.left = "0px";
    labelBottom2.style.left = "0px";
    labelBottom.innerHTML = "0%";
    labelBottom2.innerHTML = "0$";
}

// RP = regular price
// CSP = customer service price
// MP = minimum price
// AP = afiliate price

function unitsInfo(RP, CSP, MP, AP) {

    function setLabel(container, text, title = null) {
        const p = document.createElement("p");
        p.textContent = text;

        if (title) {
            p.title = title;
        }

        container.innerHTML = "";
        container.appendChild(p);
    }

    // Regular Price
    setLabel(labeltop, "RP", "Regular Price");
    setLabel(labeltop2, RP);

    // CSP
    setLabel(labeltop90, "CSP");
    setLabel(labeltop2_90, CSP);

    // MP
    setLabel(labeltop80, "MP");
    setLabel(labeltop2_80, MP);

    // AP
    setLabel(labeltop75, "AP");
    setLabel(labeltop2_75, AP);
}

updateLabels();

slider.addEventListener("input", updateLabels);

deletebotton.addEventListener("click", () => {
    buttonSkip("");
    valor2.value = "";
    labeltop2.innerHTML = "0";
});

button.addEventListener("click", () => {
    calcular();
});

// Rotorazer
rotorazerBasic.addEventListener("click", () => {
    buttonSkip(149.85);
});
rotorazerPlatinum.addEventListener("click", () => {
    buttonSkip(194.7);
});

// Salud y Suplementos
ingestibles.addEventListener("click", () => {
    buttonSkip(39.95);
});
ingestiblesplus.addEventListener("click", () => {
    buttonSkip(49.95);
});
beflexible.addEventListener("click", () => {
    buttonSkip(39.95);
});
superthotics.addEventListener("click", () => {
    buttonSkip(39.95);
});
walkfitPlatinum.addEventListener("click", () => {
    buttonSkip(19.95);
});

// AirDoctor Unidades
ad1000.addEventListener("click", () => {
    unitsInfo(700, 400, 359, 330);
});
ad2000.addEventListener("click", () => {
    unitsInfo(700, 400, 359, 330);
});
ad3500.addEventListener("click", () => {
    unitsInfo(500, 400, 359, 330);
});
ad3500i.addEventListener("click", () => {
    unitsInfo(700, 400, 359, 330);
});
ad4000.addEventListener("click", () => {
    unitsInfo(800, 400, 359, 330);
});
ad5500.addEventListener("click", () => {
    unitsInfo(720, 400, 359, 330);
});
ad5500i.addEventListener("click", () => {
    unitsInfo(700, 400, 359, 330);
});

// Filtros AD 1000
ad1000set.addEventListener("click", () => {
    buttonSkip(84.95);
});

// Filtros AD 2000
ad2000OneYearComboPack.addEventListener("click", () => {
    buttonSkip(120.57);
});
ad2000TwoYearComboPack.addEventListener("click", () => {
    buttonSkip(226.98);
});
ad2000Hepa.addEventListener("click", () => {
    buttonSkip(47.95);
});
ad2000Carbon.addEventListener("click", () => {
    buttonSkip(46.95);
});
ad2000Prefilter.addEventListener("click", () => {
    buttonSkip(15.99);
});

// Filtros AD 3000 / 3500
ad3000OneYearComboPack.addEventListener("click", () => {
    buttonSkip(162.99);
});
ad3000TwoYearComboPack.addEventListener("click", () => {
    buttonSkip(305.89);
});
ad3000Hepa.addEventListener("click", () => {
    buttonSkip(63.95);
});
ad3000Carbon.addEventListener("click", () => {
    buttonSkip(63.95);
});
ad3000Prefilter.addEventListener("click", () => {
    buttonSkip(20.95);
});

// Filtros AD 4000
ad4000set.addEventListener("click", () => {
    buttonSkip(89.95);
});

// Filtros AD 5000 / 5500
ad5000OneYearComboPack.addEventListener("click", () => {
    buttonSkip(335.75);
});
ad5000TwoYearComboPack.addEventListener("click", () => {
    buttonSkip(637.99);
});
ad5000Hepa.addEventListener("click", () => {
    buttonSkip(133);
});
ad5000Carbon.addEventListener("click", () => {
    buttonSkip(131);
});
ad5000Prefilter.addEventListener("click", () => {
    buttonSkip(35);
});
