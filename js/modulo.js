/** 
 * Calcule le modulo d'un grand nombre
 * @param string    s    grand nombre entier		
 * @param int       m    modulo
 * 
 * @return number
 */
function modulo(s, m) {
    var sizeMax = 14; // Taille max d'entier pour l'opérateur % sur IE5
    s = s.toString();
    m = parseInt(m);
    if (s.length <= sizeMax) {
        return parseInt(s) % m;
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
