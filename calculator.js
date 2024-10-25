function interesSimple(p,r,t,mt) {
    if(mt == '1') {
        t /= 12;
    }
    r /= 100
    return p*r*t;
}

function interesCompuesto(p,r,t,mt,n) {
    if(mt == '1') {
        t /= 12;
    }

    r /= 100;
    nt = n*t;
    rn = (r/n) + 1;
    ntrn = Math.pow(rn,nt);

    return p * ntrn;
}