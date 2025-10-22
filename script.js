// =======================================================
// 1. DATA: CATÁLOGO AGRUPADO POR CATEGORÍAS Y RESTRICCIONES
// =======================================================
const CATALOGO_AGRUPADO = {
    "Proteínas": {
        bases: {
            "Huevo": [
                ["entero", "2 pzas", "P"], ["claras", "4 pzas", "P"], 
                ["cocido", "2 pzas", "P"], ["en omelette", "2 pzas", "P"], ["revuelto", "2 pzas", "P"]
            ],
            "Lácteos light": [
                ["yogur griego sin azúcar", "1 vaso (150g)", "P"], ["leche light", "1 taza", "P"], 
                ["requesón light", "4 cdas", "P"], ["queso panela", "50g", "P"]
            ],
            "Pavo": [
                ["jamón bajo en sodio", "3 rebanadas", "P"], ["fajitas de pavo", "120g", "P"], 
                ["molida de pavo", "100g", "P"]
            ],
            "Pollo": [
                ["pechuga", "120g", "P"], ["fajitas", "120g", "P"], ["deshebrado", "120g", "P"], 
                ["a la plancha", "120g", "P"], ["al horno", "120g", "P"]
            ],
            "Pescado": [
                ["atún (en agua)", "1 lata", "P"], ["salmón (a la plancha)", "100g", "P"], 
                ["tilapia", "120g", "P"], ["mojarra", "1 pieza", "P"], ["robalo", "120g", "P"], 
                ["empapelado o a la plancha", "120g", "P"]
            ],
            "Carne de Res Magra": [
                ["bistec", "100g", "P"], ["molida magra", "100g", "P"], 
                ["sirloin", "100g", "P"], ["asada", "100g", "P"]
            ],
        },
        restriccion_momentos: {
            Desayuno: ["Pollo", "Carne de Res Magra", "Pescado"] 
        }
    },
    
    "Carbohidratos y Almidones": {
        bases: {
            "Avena": [["natural o en hojuelas", "1/2 taza seca", "C"]],
            "Arroz": [["integral", "1/2 taza cocido", "C"], ["cocido o al vapor", "1/2 taza cocido", "C"]],
            "Pan o Tortilla": [["integral", "1 rebanada", "C"], ["de granos enteros", "1 rebanada", "C"], ["tortilla de maíz", "2 pzas", "C"]],
            "Papa": [["cocida", "1/2 taza", "C"], ["horneada", "1/2 taza", "C"], ["puré natural (sin mantequilla)", "1/2 taza", "C"]],
            "Legumbres": [["frijoles", "1/2 taza cocidos", "C"], ["lentejas", "1/2 taza cocidas", "C"], ["garbanzos (cocidos o en ensalada)", "1/2 taza", "C"]],
        },
        grupos_restringidos: ["Avena", "Arroz", "Pan o Tortilla", "Papa", "Legumbres"]
    },
    
    "Grasas Saludables": {
        bases: {
            "Aguacate": [["rebanado", "1/2 pza", "G"], ["en cubos", "1/2 pza", "G"], ["en guacamole natural", "1/4 taza", "G"]],
            "Frutos Secos": [["almendras", "10 pzas", "G"], ["nueces", "5 pzas", "G"], ["cacahuates naturales (sin sal)", "15 pzas", "G"]],
            "Aceite de Oliva": [["para cocinar", "1 cdita", "G"], ["para aderezar ensaladas", "1 cdita", "G"]],
            "Semillas": [["chía", "1 cda", "G"], ["linaza (en yogur o avena)", "1 cda", "G"]],
        },
        grupos_grasas: ["Aguacate", "Frutos Secos", "Aceite de Oliva", "Semillas"]
    },
    
    "Vegetales y Frutas": {
        bases: {
            "Frutas": [["manzana", "1 pza", "O"], ["pera", "1 pza", "O"], ["naranja", "1 pza", "O"], ["fresa", "1 taza", "O"], ["papaya", "1 taza", "O"], ["kiwi", "1 pza", "O"], ["plátano pequeño", "1/2 pza", "O"], ["melón", "1 taza", "O"]],
            "Verduras Verdes": [["lechuga", "Libre", "O"], ["espinaca", "Libre", "O"], ["acelga", "Libre", "O"], ["kale", "Libre", "O"]],
            "Verduras Cocidas": [["brócoli", "Libre", "O"], ["coliflor", "Libre", "O"], ["calabacita", "Libre", "O"], ["ejotes", "Libre", "O"], ["chayote", "Libre", "O"], ["espárragos", "Libre", "O"], ["col", "Libre", "O"]],
            "Verduras Frescas": [["pepino", "Libre", "O"], ["jitomate", "Libre", "O"], ["pimiento", "Libre", "O"], ["zanahoria", "1/2 taza", "O"], ["apio", "Libre", "O"], ["nopal", "Libre", "O"], ["champiñones", "Libre", "O"]],
        }
    },
    
    "Líquidos y Snacks Libres": {
        bases: {
            "Agua": [["natural (2 litros o más)", "Libre", "O"], ["infusionada (pepino/limón/hierbabuena)", "Libre", "O"], ["mineral sin sodio", "Libre", "O"]],
            "Bebidas Calientes": [["café sin azúcar/crema", "Libre", "O"], ["té sin azúcar/crema", "Libre", "O"]],
            "Snacks": [["Yogur griego sin azúcar", "1 pza", "O"], ["Queso panela con pepino/apio", "50g", "O"], ["1 galleta integral con crema de maní natural", "1 pza", "O"]]
        }
    }
};

const GRUPOS_RESTRINGIDOS = CATALOGO_AGRUPADO["Carbohidratos y Almidones"].grupos_restringidos;
const GRUPOS_GRASAS = CATALOGO_AGRUPADO["Grasas Saludables"].grupos_grasas;
const RESTRICCIONES_DESAYUNO = CATALOGO_AGRUPADO["Proteínas"].restriccion_momentos.Desayuno;

const EQUIVALENCIAS_GRASA = {
    "Aguacate": { full: "1/2 pza", half: "1/4 pza" },
    "Frutos Secos": { full: "10 pzas", half: "5 pzas" },
    "Aceite de Oliva": { full: "1 cdita", half: "1/2 cdita" },
    "Semillas": { full: "1 cda", half: "1/2 cda" }
};

// =======================================================
// 2. REFERENCIAS Y ESTADO (DOM Elements)
// =======================================================
let menuSemanal = JSON.parse(localStorage.getItem('menuSemanal')) || [];

const diaSelect = document.getElementById('dia');
const momentoSelect = document.getElementById('momento');
const catalogoContainer = document.getElementById('catalogo-container');
const notasInput = document.getElementById('notas-adicionales'); 
const mealForm = document.getElementById('meal-form');
const menuContainer = document.getElementById('menu-container');
const clearMenuBtn = document.getElementById('clear-menu-btn');
const downloadBtn = document.getElementById('download-btn');


// =======================================================
// 3. FUNCIONALIDADES DE DATOS
// =======================================================

function saveMenu() {
    localStorage.setItem('menuSemanal', JSON.stringify(menuSemanal));
}

function getItemData(base, detalle) {
    for (const catKey in CATALOGO_AGRUPADO) {
        if (CATALOGO_AGRUPADO[catKey].bases[base]) {
            return CATALOGO_AGRUPADO[catKey].bases[base].find(item => item[0] === detalle);
        }
    }
    return null;
}

function isCarbRestricted(dia, momento) {
    return menuSemanal.some(item => 
        item.dia === dia && 
        item.momento === momento && 
        GRUPOS_RESTRINGIDOS.includes(item.base)
    );
}

// =======================================================
// 4. LÓGICA DE PORCIONES Y AJUSTES
// =======================================================

function adjustFatPortions(dia, momento) {
    const grasasEnSlot = menuSemanal.filter(item => 
        item.dia === dia && 
        item.momento === momento && 
        GRUPOS_GRASAS.includes(item.base)
    );
    
    grasasEnSlot.forEach(item => {
        const porcionKey = item.base;
        let nuevaPorcion = item.cantidad; 

        if (EQUIVALENCIAS_GRASA[porcionKey]) {
            if (grasasEnSlot.length <= 1) {
                nuevaPorcion = EQUIVALENCIAS_GRASA[porcionKey].full;
            } else {
                nuevaPorcion = EQUIVALENCIAS_GRASA[porcionKey].half;
            }
        }
        item.cantidad = nuevaPorcion;
    });

    saveMenu();
    renderMenu();
}


// =======================================================
// 5. RENDERIZADO DEL CATÁLOGO (CON DOBLE AGRUPACIÓN)
// =======================================================

function renderCatalogue() {
    let html = '';
    const selectedDia = diaSelect.value;
    const selectedMomento = momentoSelect.value;
    const isSlotRestrictedForCarbs = isCarbRestricted(selectedDia, selectedMomento);

    for (const categoria in CATALOGO_AGRUPADO) {
        const categoriaData = CATALOGO_AGRUPADO[categoria];
        
        // 1. Encabezado de la Categoría (Acordeón principal)
        html += `<div class="catalogo-category-group">`;
        html += `<h3 class="category-header">${categoria}</h3>`;
        html += `<div class="category-content">`; // Contenedor de las bases

        for (const base in categoriaData.bases) {
            const detalles = categoriaData.bases[base];
            const isCarb = categoriaData.grupos_restringidos && categoriaData.grupos_restringidos.includes(base);
            
            // Restricción: Carbohidrato ya usado en el slot
            const isCarbDisabled = isSlotRestrictedForCarbs && isCarb;
            const carbDisabledText = isCarbDisabled ? ' (YA USADO ⚠️)' : '';

            // Restricción por Momento: Pollo, Res, Pescado en Desayuno
            const isMomentDisabled = categoriaData.restriccion_momentos && 
                                     categoriaData.restriccion_momentos[selectedMomento] && 
                                     categoriaData.restriccion_momentos[selectedMomento].includes(base);
            const momentDisabledText = isMomentDisabled ? ` (No en ${selectedMomento} 🚫)` : '';

            const isDisabled = isCarbDisabled || isMomentDisabled;
            const disabledClass = isDisabled ? 'disabled-base' : '';

            // 2. Encabezado de la Base (Segundo nivel de acordeón)
            html += `<div class="catalogo-base-group ${disabledClass}">`;
            
            html += `<h4 class="base-header" data-base="${base}">${base}${carbDisabledText}${momentDisabledText}</h4>`;
            
            // Contenido de la Base (los checkboxes de los detalles)
            html += `<div class="base-content">`;

            detalles.forEach(([detalle, porcion, grupo]) => {
                const id = `${base}-${detalle}`.replace(/[^a-zA-Z0-9]/g, '_'); 
                const value = `${base}|${detalle}|${porcion}|${grupo}`;

                html += `
                    <div class="checkbox-item">
                        <label for="${id}">
                             <input type="checkbox" id="${id}" name="comida" 
                                   value="${value}" ${isDisabled ? 'disabled' : ''}>
                             ${detalle} <span style="font-weight: normal; color: #666;">(${porcion})</span>
                        </label>
                    </div>
                `;
            });
            
            html += `</div></div>`; // Cierre del contenido y del grupo de base
        }
        
        html += `</div></div>`; // Cierre del contenido y del grupo de categoría
    }

    catalogoContainer.innerHTML = html;
    
    // Asignar los listeners de toggle al finalizar el renderizado
    addAccordionListeners();
}


/**
 * Añade la lógica de toggle a los encabezados de la base (Nivel 2) y categorías (Nivel 1).
 */
function addAccordionListeners() {
    // Escucha el cambio en los selects para re-renderizar y mantener la lógica de restricciones
    document.querySelectorAll('#dia, #momento').forEach(select => {
        select.addEventListener('change', renderCatalogue);
    });

    // Lógica para el Acordeón de Nivel 2 (Bases)
    document.querySelectorAll('.catalogo-base-group .base-header').forEach(header => {
        header.onclick = function() {
            const baseGroup = this.parentElement;
            
            if (baseGroup.classList.contains('disabled-base')) {
                return; 
            }

            // Toggle la clase 'active' para desplegar/contraer
            baseGroup.classList.toggle('active');
        };
    });
    
    // Lógica para el Acordeón de Nivel 1 (Categorías)
    document.querySelectorAll('.catalogo-category-group .category-header').forEach(header => {
        header.onclick = function() {
            const categoryGroup = this.parentElement;
            
            // Toggle la clase 'active' para desplegar/contraer
            categoryGroup.classList.toggle('active');
        };
    });
}

// =======================================================
// 6. MANEJO DE EVENTOS
// =======================================================

function handleFormSubmit(e) {
    e.preventDefault();

    const dia = diaSelect.value;
    const momento = momentoSelect.value;
    const notas = notasInput.value.trim(); 

    const selectedItems = Array.from(document.querySelectorAll('#catalogo-container input[name="comida"]:checked'));

    if (selectedItems.length === 0) {
        alert("Por favor, selecciona al menos un elemento del catálogo. 👆");
        return;
    }

    let isCarbInSelection = false;
    const itemsToPush = [];

    for (const item of selectedItems) {
        const [base, detalle, porcion, grupo] = item.value.split('|');
        
        // Validación 1: Carbohidratos (solo se permite UNO por slot)
        if (GRUPOS_RESTRINGIDOS.includes(base)) {
            if (isCarbInSelection || isCarbRestricted(dia, momento)) {
                alert(`¡Error! Solo se permite UNA porción de carbohidrato/almidón por momento. Ya seleccionaste o agregaste otro. Por favor, desmarca ${base}. 🛑`);
                selectedItems.forEach(cb => cb.checked = false);
                renderCatalogue();
                return;
            }
            isCarbInSelection = true;
        }
        
        // Validación 2: Restricción por Momento (ej: Pollo en Desayuno)
        const isMomentDisabled = RESTRICCIONES_DESAYUNO.includes(base) && momento === 'Desayuno';
        if (isMomentDisabled) {
             alert(`¡Error! El elemento "${base}" no está permitido en el ${momento}. Por favor, desmárcalo. 🚫`);
             selectedItems.forEach(cb => cb.checked = false);
             renderCatalogue();
             return;
        }

        itemsToPush.push({
            dia: dia,
            momento: momento,
            base: base,
            detalle: detalle,
            cantidad: porcion,
            notas: notas,
            grupo: grupo
        });
    }

    menuSemanal.push(...itemsToPush);
    
    const fatItemsAdded = itemsToPush.some(item => GRUPOS_GRASAS.includes(item.base));
    if (fatItemsAdded) {
        adjustFatPortions(dia, momento); 
    } else {
        saveMenu();
        renderMenu();
    }

    selectedItems.forEach(item => item.checked = false);
    notasInput.value = '';
}


function handleDeleteItem(e) {
    const btn = e.target;
    const dia = btn.dataset.dia;
    const momento = btn.dataset.momento;
    const base = btn.dataset.base;
    const detalle = btn.dataset.detalle;

    const itemToDelete = menuSemanal.find(item => 
        item.dia === dia && item.momento === momento && item.base === base && item.detalle === detalle
    );

    menuSemanal = menuSemanal.filter(item => 
        !(item.dia === dia && item.momento === momento && item.base === base && item.detalle === detalle)
    );

    if (itemToDelete && GRUPOS_GRASAS.includes(itemToDelete.base)) {
        adjustFatPortions(dia, momento);
    } else {
        saveMenu();
        renderMenu();
    }
}

function renderMenu() {
    // Organizar y renderizar la tabla (lógica similar a la versión anterior)
    const menuPorDia = { 'Lunes': {}, 'Martes': {}, 'Miércoles': {}, 'Jueves': {}, 'Viernes': {}, 'Sábado': {}, 'Domingo': {} };
    menuSemanal.forEach(item => {
        if (!menuPorDia[item.dia][item.momento]) {
            menuPorDia[item.dia][item.momento] = [];
        }
        menuPorDia[item.dia][item.momento].push(item);
    });

    let html = '<table class="menu-table">';
    const momentos = ['Desayuno', 'Almuerzo', 'Cena', 'Snack'];
    html += '<thead><tr><th>Día</th>' + momentos.map(m => `<th>${m}</th>`).join('') + '</tr></thead>';
    html += '<tbody>';
    
    const dias = Object.keys(menuPorDia);
    dias.forEach(dia => {
        html += `<tr><td><strong>${dia}</strong></td>`;
        
        momentos.forEach(momento => {
            const comidas = menuPorDia[dia][momento] || [];
            let contenidoCelda = '';
            
            if (isCarbRestricted(dia, momento)) {
                 contenidoCelda += '<div style="font-weight: bold; color: orange; margin-bottom: 5px;">⚠️ Carbohidrato en uso</div>';
            }
            
            contenidoCelda += comidas.map(c => {
                let display = `<strong>${c.base}: ${c.detalle}</strong> (${c.cantidad})`;
                if (c.notas) {
                    display += `<br><small>(${c.notas})</small>`;
                }
                return `<div>${display} 
                 <span class="delete-item" data-dia="${dia}" data-momento="${momento}" data-base="${c.base}" data-detalle="${c.detalle}">❌</span></div>`;
            }).join('<hr style="margin:2px 0;">'); 

            html += `<td>${contenidoCelda}</td>`;
        });

        html += '</tr>';
    });

    html += '</tbody></table>';

    if (menuSemanal.length === 0) {
         menuContainer.innerHTML = '<p>El menú está vacío. ¡Empieza a agregar comidas! 🥑</p>';
    } else {
        menuContainer.innerHTML = html;
        document.querySelectorAll('.delete-item').forEach(btn => {
            btn.addEventListener('click', handleDeleteItem);
        });
    }
    
    renderCatalogue(); 
}

clearMenuBtn.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres borrar TODO el menú semanal? Esta acción no se puede deshacer. 🗑️')) {
        menuSemanal = []; 
        saveMenu();       
        renderMenu();     
    }
});

downloadBtn.addEventListener('click', () => {
    window.print(); 
});


// =======================================================
// 7. INICIALIZACIÓN
// =======================================================
// Esta función debe ejecutarse al final de la carga del HTML.
// (La etiqueta <script src="script.js"></script> en el HTML asegura esto).
function initializeCatalogue() {
    // Escucha el evento submit del formulario
    mealForm.addEventListener('submit', handleFormSubmit);
    
    // Inicializa el catálogo y el menú al cargar la página
    renderCatalogue(); 
}

initializeCatalogue();