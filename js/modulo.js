/**
 * Calcul le modulo d'un très grand nombre
 * 
 * @param string s
 * @param int m
 * @return number
 */
function modulo(s, m) {
    s = s.toString();
    m = parseInt(m);
    if (s.length <= 15) {
        return parseInt(s) % m;
    } else {
        var mod1 = modulo(s.substr(15), m);
        var mod2 = modulo(modulo(s.substr(0,15), m) * modulo(Math.pow(10, s.substr(15).length), m), m);
        return modulo(mod1 + mod2, m);      
    }
}
