function initializeListeners() {
    document.getElementById("button").addEventListener("click", function() {
        let breite = document.getElementById('breite').value;
        let hoehe = document.getElementById('hoehe').value;
        let tiefe = document.getElementById('tiefe').value;

        breite = breite.replace(",", ".");
        hoehe = hoehe.replace(",", ".");
        tiefe = tiefe.replace(",", ".");

        let b = parseFloat(breite);
        let h = parseFloat(hoehe);
        let t = parseFloat(tiefe);

        let hFlaeche = hoeheDerFlaeche(h, t);
        let bFlaeche = breiteDerFlaeche(b, t);

        document.getElementById("outputBreite").innerHTML = "Die Breite der Flaeche: " + bFlaeche.toFixed(2);
        document.getElementById("outputHoehe").innerHTML = "Die Hoehe der Flaeche: " + hFlaeche.toFixed(2);
        /**
         * output Falzlinien
         */
        document.getElementById("falzlinienBreite1").innerHTML = "1.FB Falzlinien auf der Breite: " + falzlinienAufDerBreite1(b).toFixed(2);
        document.getElementById("falzlinienBreite2").innerHTML = "2.FB Falzlinien auf der Breite: " + falzlinienAufDerBreite2(b, t).toFixed(2);
        document.getElementById("falzlinienBreite3").innerHTML = "3.FB Falzlinien auf der Breite: " + falzlinienAufDerBreite3(b, t).toFixed(2);
        document.getElementById("falzlinienBreite4").innerHTML = "4.FB Falzlinien auf der Breite: " + falzlinienAufDerBreite4(b, t).toFixed(2);
        document.getElementById("falzlinienHoehe1").innerHTML = "1.FH Falzlinien auf der Hoehe: " + falzlinienAufDerHoehe1().toFixed(2);
        document.getElementById("falzlinienHoehe2").innerHTML = "2.FH Falzlinien auf der Hoehe: " + falzlinienAufDerHoehe2(t).toFixed(2);
        document.getElementById("falzlinienHoehe3").innerHTML = "3.FH Falzlinien auf der Hoehe: " + falzlinienAufDerHoehe3(t, h).toFixed(2);

        bild()
        canvasGroesse(b, h, t);
        Flaeche(cmToPixel(bFlaeche), cmToPixel(hFlaeche));
        /**
         *  Zeichnen rotesRechteck
         */
        rotesRechteckAuf1FBBis2FH(b, t);
        rotesRechteckAuf2FBBis1FH(b, t);
        rotesRechteckAuf3FBBis1FH(b, t);
        rotesRechteckAuf4FBBis2FH(b, t);
        rotesRechteckAuf4FBBis3FH(b, h, t);
        /**
         *  Zeichnen Falzlinien
         */
        zeichnenFalzlinienAufDerBreite1(b, h, t);
        zeichnenFalzlinienAufDerBreite2(b, h, t);
        zeichnenFalzlinienAufDerBreite3(b, h, t);
        zeichnenFalzlinienAufDerBreite4(b, h, t);
        zeichnenFalzlinienAufDerHoehe1(b, t);
        zeichnenFalzlinienAufDerHoehe2(b, t);
        zeichnenFalzlinienAufDerHoehe3(b, h, t);
        /**
         *  Zeichnen Einschnittlinie
         */
        einschneidenAuf1FBUnd3FH(b, h, t);
        einschneidenAuf2FBUnd3FH(b, h, t);
        einschneidenAuf3FBUnd3FH(b, h, t)
        einschneidenAuf2FBUnd2FH(b, t);
        einschneidenAuf3FBUnd2FH(b, t);
        /**
         * Zeichnen die Ecken Abrunden
         */
        eckenAbrundenAuf2FB(b, t);
        eckenAbrundenAuf3FB(b, t);
        /**
         * Zeichnen die Beschreibungen "Text"
         */
        textBF(b, h, t);
        textHF(b, h, t);
    });
}
/**
 * Hier wird die Flaeche des Rechtecks berechnet.
 * @param {*} breite 
 * @param {*} hoehe 
 */
function Flaeche(breite, hoehe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, breite, hoehe);
    ctx.stroke();
}
/**
 * Hier wird die Hoehe des Rechtecks berechnet.
 * @param {*} hoehe 
 * @param {*} tiefe 
 * @returns h = hoehe der Flaeche
 */

function hoeheDerFlaeche(hoehe, tiefe) {
    let leerraumHoehe = parseFloat(0.8);
    let kleber = 1;
    let schliessung = tiefe / 2;
    let h = tiefe + hoehe + leerraumHoehe + kleber + schliessung;
    return h

}

/**
 * Hier wird die Breite des Rechtecks berechnet. 
 * @param {*} breite 
 * @param {*} tiefe 
 * @returns b breite der Flaeche
 */
function breiteDerFlaeche(breite, tiefe) {
    let leerraumBreite = parseFloat(0.8);
    let kleber = 1;
    let b = breite + breite + tiefe + tiefe + leerraumBreite + kleber;
    return b;
}
/**
 * Hier wird die 1. Faltlinie auf die Breite berechnet.
 * @param {*} breite 
 * @returns falzLinien1
 */

function falzlinienAufDerBreite1(breite) {
    let leerraum = parseFloat(0.2);
    let b = breite + leerraum;
    let falzLinien1 = b;
    return falzLinien1;
}

/**
 * Hier wird die 2. Faltlinie auf die Breite berechnet.
 * @param {*} breite 
 * @param {*} tiefe 
 * @returns falzLinien2
 */
function falzlinienAufDerBreite2(breite, tiefe) {
    let leerraum = parseFloat(0.2);
    let b = breite + leerraum;
    let t = tiefe + leerraum;
    let falzLinien2 = b + t;
    return falzLinien2;
}

/** 
 * Hier wird die 3. Faltlinie auf die Breite berechnet.
 * @param {*} breite 
 * @param {*} tiefe 
 * @returns falzLinien3
 */
function falzlinienAufDerBreite3(breite, tiefe) {
    let leerraum = parseFloat(0.2);
    let b = breite + leerraum;
    let t = tiefe + leerraum;
    let falzLinien3 = b + t + b;
    return falzLinien3
}

/**
 * Hier wird die 4. Faltlinie auf die Breite berechnet.
 * @param {*} breite 
 * @param {*} tiefe 
 * @returns falzLinien4
 */
function falzlinienAufDerBreite4(breite, tiefe) {
    let leerraum = parseFloat(0.2);
    let b = breite + leerraum;
    let t = tiefe + leerraum;
    let falzLinien4 = b + t + b + t;
    return falzLinien4;
}


/**
 * Hier wird die 1. Faltlinie auf der Hoehe berechnet.
 * @returns falzLinien1
 */
function falzlinienAufDerHoehe1() {
    let schliessung = 1;
    let falzLinien1 = schliessung;
    return falzLinien1;
}

/**
 * Hier wird die 2. Faltlinie auf der Hoehe berechnet.
 * @param {*} tiefe 
 * @returns falzLinien2
 */
function falzlinienAufDerHoehe2(tiefe) {
    let leerraum = parseFloat(0.2);
    let schliessung = 1;
    let t = tiefe + leerraum;
    let falzLinien2 = schliessung + t;
    return falzLinien2;
}

/**
 * Hier wird die 3. Faltlinie auf der Hoehe berechnet.
 * @param {*} tiefe 
 * @param {*} hoehe 
 * @returns falzLinien3
 */
function falzlinienAufDerHoehe3(tiefe, hoehe) {
    let leerraum = parseFloat(0.2);
    let schliessung = 1;
    let h = hoehe + leerraum;
    let t = tiefe + leerraum;
    let falzLinien3 = schliessung + t + h;
    return falzLinien3;
}


/**
 * Hier wird die 1. Faltlinie auf die Breite gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerBreite1(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite1(breite)), 0);
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite1(breite)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.closePath();
    ctx.stroke();
}

/**
 * Hier wird die 2. Faltlinie auf die Breite gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerBreite2(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), 0);
    console.log(cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird die 3. Faltlinie auf die Breite gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerBreite3(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), 0);
    console.log(cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird die 4. Faltlinie auf die Breite gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerBreite4(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite4(breite, tiefe)), 0);
    console.log(cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite4(breite, tiefe)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird die 1. Falzlinie auf der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerHoehe1(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, cmToPixel(falzlinienAufDerHoehe1()));
    ctx.lineTo(cmToPixel(breiteDerFlaeche(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird die 2. Falzlinie auf der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerHoehe2(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.lineTo(cmToPixel(breiteDerFlaeche(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird die 3. Falzlinie auf der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function zeichnenFalzlinienAufDerHoehe3(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.lineTo(cmToPixel(breiteDerFlaeche(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.closePath()
    ctx.stroke();
}

/**
 * Hier wird das  rote Rechteck von der 1. Falzlinien auf der Breite Bis zur 2. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function rotesRechteckAuf1FBBis2FH(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(0, 0, cmToPixel(falzlinienAufDerBreite1(breite)), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.fill();
}

/**
 * Hier wird das  rote Rechteck von der 2. Falzlinien auf der Breite Bis zur 1. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function rotesRechteckAuf2FBBis1FH(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(0, 0, cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.fill();
}

/**
 * Hier wird das  rote Rechteck von der 3. Falzlinien auf der Breite Bis zur 1. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function rotesRechteckAuf3FBBis1FH(breite, tiefe) {
    let leerraumBreiteFuerTiefe = parseFloat(0.2);
    let kleber = 1;
    let fb3bisEnde = tiefe + kleber + leerraumBreiteFuerTiefe;
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), 0, cmToPixel(fb3bisEnde), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.fill();
}

/**
 * Hier wird das  rote Rechteck von der 3. Falzlinien auf der Breite Bis zur 1. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function rotesRechteckAuf3FBBis1FH(breite, tiefe) {
    let leerraumBreiteFuerTiefe = parseFloat(0.2);
    let kleber = 1;
    let fb3bisEnde = tiefe + kleber + leerraumBreiteFuerTiefe;
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), 0, cmToPixel(fb3bisEnde), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.fill();
}

/**
 * Hier wird das  rote Rechteck von der 4. Falzlinien auf der Breite Bis zur 2. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function rotesRechteckAuf4FBBis2FH(breite, tiefe) {
    let kleber = 1;
    let fb4bisEnde = kleber;
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(cmToPixel(falzlinienAufDerBreite4(breite, tiefe)), 0, cmToPixel(fb4bisEnde), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.fill();
}

/**
 * Hier wird das  rote Rechteck von der 4. Falzlinien auf der Breite Bis zur 3. Falzlinien Auf Der Hoehe gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function rotesRechteckAuf4FBBis3FH(breite, hoehe, tiefe) {
    let leerraumBreite = parseFloat(0.4);
    let schliessung = (tiefe / 2) + leerraumBreite;
    let kleber = 1;
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(cmToPixel(falzlinienAufDerBreite4(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)), cmToPixel(kleber), cmToPixel(schliessung));
    ctx.fill();
}


/**
 * Hier wird die Einschnittlinie auf der 1. Falzlinie auf der Breite und auf der 3. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function einschneidenAuf1FBUnd3FH(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite1(breite)), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite1(breite)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Einschnittlinie auf der 2. Falzlinie auf der Breite und auf der 3. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function einschneidenAuf2FBUnd3FH(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Einschnittlinie auf der 3. Falzlinie auf der Breite und auf der 3. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function einschneidenAuf3FBUnd3FH(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Einschnittlinie auf der 2. Falzlinie auf der Breite und auf der 2. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function einschneidenAuf2FBUnd2FH(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Einschnittlinie auf der 3. Falzlinie auf der Breite und auf der 2. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function einschneidenAuf3FBUnd2FH(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Einschnittlinie auf der 2. Falzlinie auf der Breite und auf der 2. Falzlinie auf der Höhe gezeichnet.
 * @param {*} breite 
 * @param {*} tiefe 
 */
function einschneidenAuf2FBUnd2FH(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([5, 10]);
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.lineTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.stroke();
    ctx.closePath();
}

/**
 * Hier wird die Ecke Abrunden auf der 2. Faltlinie auf der Breite gezeichnet  
 * @param {*} breite 
 * @param {*} tiefe 
 */
function eckenAbrundenAuf2FB(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "ffffff";
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()) / 2);
    ctx.quadraticCurveTo(cmToPixel(falzlinienAufDerBreite2(breite, tiefe)), 0, cmToPixel(falzlinienAufDerBreite2(breite, tiefe)) + cmToPixel((tiefe / 4)), 0);
    ctx.stroke();
}

/**
 * Hier wird die Ecke Abrunden auf der 3. Faltlinie auf der Breite gezeichnet  
 * @param {*} breite 
 * @param {*} tiefe 
 */
function eckenAbrundenAuf3FB(breite, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "ffffff";
    ctx.moveTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), cmToPixel(falzlinienAufDerHoehe1()) / 2);
    ctx.quadraticCurveTo(cmToPixel(falzlinienAufDerBreite3(breite, tiefe)), 0, cmToPixel(falzlinienAufDerBreite3(breite, tiefe)) - cmToPixel((tiefe / 4)), 0, true);
    ctx.stroke();
}

/**
 * Hier Zeichnen wir die Beschreibungen "Text" auf die Breite des Rechtecks.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function textBF(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("1.FB= " + falzlinienAufDerBreite1(breite).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite1(breite) - parseFloat(0.5)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe) + 1));
    ctx.fillText("2.FB= " + falzlinienAufDerBreite2(breite, tiefe).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite2(breite, tiefe) - parseFloat(0.5)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe) + 1));
    ctx.fillText("3.FB= " + falzlinienAufDerBreite3(breite, tiefe).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite3(breite, tiefe) - parseFloat(0.5)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe) + 1));
    ctx.fillText("4.FB= " + falzlinienAufDerBreite4(breite, tiefe).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite4(breite, tiefe) - parseFloat(0.5)), cmToPixel(hoeheDerFlaeche(hoehe, tiefe) + 1));

}

/**
 * Hier Zeichnen wir die Beschreibungen "Text" auf die Höhe des Rechtecks.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function textHF(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("1.FH= " + falzlinienAufDerHoehe1().toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) + 1), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.fillText("2.FH= " + falzlinienAufDerHoehe2(tiefe).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) + 1), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.fillText("3.FH= " + falzlinienAufDerHoehe3(tiefe, hoehe).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) + 1), cmToPixel(falzlinienAufDerHoehe3(tiefe, hoehe)));
    ctx.fillText("HF= " + hoeheDerFlaeche(hoehe, tiefe).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) + 1), cmToPixel(hoeheDerFlaeche(hoehe, tiefe)));
}

/**
 * Hier werden die Breiten für jedes Rechteck auf der Fläche berechnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function breiteFuerJedesRechteck(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(falzlinienAufDerBreite1(breite).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite1(breite) / 3), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((falzlinienAufDerBreite2(breite, tiefe) - falzlinienAufDerBreite1(breite)).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite2(breite, tiefe) - tiefe), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((falzlinienAufDerBreite3(breite, tiefe) - falzlinienAufDerBreite2(breite, tiefe)).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite3(breite, tiefe) - breite), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((falzlinienAufDerBreite4(breite, tiefe) - falzlinienAufDerBreite3(breite, tiefe)).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite4(breite, tiefe) - tiefe), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((breiteDerFlaeche(breite, tiefe) - falzlinienAufDerBreite4(breite, tiefe)).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) - 1), cmToPixel(falzlinienAufDerHoehe1() / 3));
}

/**
 * Hier werden die Höhen für jedes Rechteck auf der Fläche berechnet.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function hoeheFuerJedesRechteck(breite, hoehe, tiefe) {
    let schliessung = 1;
    let c = document.getElementById("zeichen");
    let ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(falzlinienAufDerHoehe1().toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) - schliessung), cmToPixel(falzlinienAufDerHoehe1()));
    ctx.fillText((falzlinienAufDerHoehe2(tiefe) - falzlinienAufDerHoehe1()).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) - schliessung), cmToPixel(falzlinienAufDerHoehe2(tiefe)));
    ctx.fillText((falzlinienAufDerHoehe3(tiefe, hoehe) - falzlinienAufDerHoehe2(tiefe)).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) - schliessung), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((falzlinienAufDerBreite4(breite, tiefe) - falzlinienAufDerBreite3(breite, tiefe)).toFixed(2) + "cm", cmToPixel(falzlinienAufDerBreite4(breite, tiefe) - tiefe), cmToPixel(falzlinienAufDerHoehe1() / 3));
    ctx.fillText((breiteDerFlaeche(breite, tiefe) - falzlinienAufDerBreite4(breite, tiefe)).toFixed(2) + "cm", cmToPixel(breiteDerFlaeche(breite, tiefe) - 1), cmToPixel(falzlinienAufDerHoehe1() / 3));
}

/**
 * hier fügen wir das Bild "SchnittmusterBild2.jpg" in unser Html mit der ID "bild" ein
 */
function bild() {
    let bild = '<img src="SchnittmusterBild2.jpg" alt="Schnittmuster"width="200" height="100">';
    document.getElementById("bild").innerHTML = bild;
}

/**
 * Hier werden Zentimeter in Pixels umgewandelt.
 * @param {*} centi 
 * @returns pixels
 */
function cmToPixel(centi) {
    let pixels = (96 * centi) / 2.54;
    return pixels;
}

/**
 * Hier wird die Größe unsere "Canvas" renitialisiert.
 * @param {*} breite 
 * @param {*} hoehe 
 * @param {*} tiefe 
 */
function canvasGroesse(breite, hoehe, tiefe) {
    let c = document.getElementById("zeichen");
    c.height = cmToPixel(hoeheDerFlaeche(hoehe, tiefe) + 3);
    c.width = cmToPixel(breiteDerFlaeche(breite, tiefe) + 3);
}