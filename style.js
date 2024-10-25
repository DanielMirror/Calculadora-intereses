//Cambio de altura del main al hacer hover
const HEADER = document.querySelector('header');
const MAIN = document.querySelector('main');

HEADER.addEventListener('mouseover',()=>{
    MAIN.style.height = '85vh';
})

//Cambio de plantilla al cambiar el tipo de interes
const TIPOINTERES = document.getElementById('select-interes')
const FORM = document.querySelector('form');

TIPOINTERES.addEventListener('change', (event)=> {
    const SELECTED = event.target.value;

    switch(SELECTED) {
        case `0`:
            FORM.innerHTML = ``;
            break;
        case '1':
            FORM.innerHTML = `
            <label for="capital">Inserte la capital</label>
            <input type="number" id="capital" required>
            <br>
            <label for="tasa">Inserte la Tasa de Interés</label>
            <input type="number" class="tiny-number" maxlength="2" id="tasa" required>
            <br>
            <label for="select-time">Inserte la medida de Tiempo</label>
            <select id="select-time">
                <option value="1">Por Meses</option>
                <option value="2">Por años</option>
            </select>
            <input type="number" class="tiny-number" maxlength="2" id="tiempo" required>
            <br>
            <input type="button" value="Calcular" id="calcular">`;
        break;

        case '2':
            FORM.innerHTML = `
            <label for="capital">Inserte la capital</label>
            <input type="number" id="capital" required>
            <br>
            <label for="tasa">Inserte la Tasa de Interés</label>
            <input type="number" class="tiny-number" maxlength="2" id="tasa" required>
            <br>
            <label for="select-time">Inserte la medida de Tiempo</label>
            <select id="select-time">
                <option value="1">Por Meses</option>
                <option value="2">Por años</option>
            </select>
            <input type="number" class="tiny-number" maxlength="2" id="tiempo" required>
            <br>
            <label for="select-capital">Inserte la capitalización</label>
            <select id="select-capital">
                <option value="12">Mensual</option>
                <option value="6">Bimensual</option>
                <option value="4">Trimestral</option>
                <option value="3">Cuatrimestral</option>
                <option value="2">Semestral</option>
                <option value="1">Anual</option>
            </select>
            <br>
            <input type="button" value="Calcular" id="calcular">`;
        break;  
    }

    //Impresión del resultado
    const CALCULAR = document.getElementById('calcular');
    const SECTION = document.querySelector('section');

    CALCULAR.addEventListener('click',()=>{
        const p = document.getElementById('capital').value;
        const r = document.getElementById('tasa').value;
        const t = document.getElementById('tiempo').value;
        const mt = document.getElementById('select-time').value;

        let n

        if(SELECTED == '2') {
            n = parseInt(document.getElementById('select-capital').value);
        }

        let i;
        let a;

        if(SELECTED == '1') {
            i = interesSimple(p,r,t,mt);
            a = parseInt(p) + i;
        } else {
            a = interesCompuesto(p,r,t,mt,n);
            i = a - p;
        }

        SECTION.innerHTML = `
            <h1 class="titulo">Resultados</h1>
            <br>
            <h2 class="label">Total del Interés</h2>
            <h3 class="resultado">${i}</h3>
            <br>
            <h2 class="label">Total del Monto</h2>
            <h3 class="resultado">${a}</h3>
            <br>
            <input type="button" id="reiniciar" value="Reiniciar">
        `;

        //Reiniciar pagina al dar click en el boton
        const REINICIAR = document.getElementById('reiniciar');
        REINICIAR.addEventListener('click', ()=> {
            location.reload();
        });
    });
});