<?php
/**
 * Calcule le modulo d'un grand nombre
 * @param string    $s    dividende
 * @param int       $m    diviseur
 *
 * @return number
 */
function modulo(string $s, int $m) {
    $sizeMax = 9; // Longueur max d'entier sur système 32 bit
    if (strlen($s) <= $sizeMax) {
        return $s % $m;
    } else {
        // partie de droite : nombre de taille sizeMax-1
        $nb1 = substr($s, strlen($s) - ($sizeMax - 1));
        $m1 = modulo($nb1, $m);
        // partie de gauche : nombre de taille length - sizeMax-1
        $nb2 = substr($s, 0,strlen($s) - ($sizeMax - 1));
        $m2 = modulo($nb2, $m);
        // puissance de 10 à appliquer à m2
        $nb3 = pow(10, strlen($nb1));
        $m3 = modulo($nb3, $m);
        // Calcule du modulo final
        return modulo($m1 + modulo($m2 * $m3, $m), $m);
    }
}
