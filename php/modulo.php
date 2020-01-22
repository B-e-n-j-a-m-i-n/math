/**
 * Calcul le modulo d'un très grand nombre
 * 
 * @param string $s
 * @param int $m
 * @return number
 */
function modulo(string $s, int $m)
{
    if (strlen($s) <= 15) {
        return $s % $m;
    } else {
        $mod1 = modulo(substr($s, 15), $m);
        $mod2 = modulo(modulo(substr($s, 0, 15), $m) * modulo(pow(10, (strlen(substr($s, 15)))), $m), $m);
        return modulo($mod1 + $mod2, $m);
    }
}
