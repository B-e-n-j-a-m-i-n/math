/** 
 * Calcule le modulo d'un grand nombre
 * @param string    s    dividende		
 * @param int       m    diviseur
 * 
 * @return number
 */
function modulo(s, m) {
    var sizeMax = 9; // Longueur max d'entier sur système 32 bit
    s = s.toString();
    m = parseInt(m, 10);
    if (s.length <= sizeMax) {
        return parseInt(s, 10) % m;
    } else {
        // partie de droite : nombre de taille sizeMax-1
        var nb1 = s.substr(s.length - (sizeMax - 1));
        var m1 = modulo(nb1, m);
        // partie de gauche : nombre de taille length - sizeMax-1
        var nb2 = s.substr(0,s.length - (sizeMax - 1));
        var m2 = modulo(nb2, m);
        // puissance de 10 à appliquer à m2
        var nb3 = Math.pow(10, nb1.length);
        var m3 = modulo(nb3, m);
        // Calcule du modulo final
        return modulo(m1 + modulo(m2 * m3, m), m);
    }
}
