const hamburgozy = {
    patty: 1,
    cheese: 0,
    lettuce: 0,
    tomatoes: 0,
    onions: 0,
    pickles: 0
}

// Returns a structured, complete set of a full burger, 
// Based on the current topping counts
function getBurgerLayers(){
    let layers = {
        under_bun: 1,
        patty: getToppingCount('patty'),
        cheese: getToppingCount('cheese'),
        lettuce: getToppingCount('lettuce'),
        tomatoes: getToppingCount('tomatoes'),
        onions: getToppingCount('onions'),
        pickles: getToppingCount('pickles'),
        top_bun: 1
    };

    return layers;
}

// Renders the current burger's graphics
function renderBurger(){
    let currentLayers = getBurgerLayers();

    let innerVal = '';
    
    innerVal = appendToppingLayers('top_bun', 1, innerVal);
    innerVal = appendToppingLayers('pickles', currentLayers.pickles, innerVal);
    innerVal = appendToppingLayers('onions', currentLayers.onions, innerVal);
    innerVal = appendToppingLayers('tomatoes', currentLayers.tomatoes, innerVal);
    innerVal = appendToppingLayers('lettuce', currentLayers.lettuce, innerVal);
    innerVal = appendToppingLayers('cheese', currentLayers.cheese, innerVal);
    innerVal = appendToppingLayers('patty', currentLayers.patty, innerVal);
    innerVal = appendToppingLayers('under_bun', 1, innerVal);

    document.getElementById('burger').innerHTML = '' + innerVal;
}

// Adds an HTML representation of an Hamburgozy layer to a string
function appendToppingLayers(toppingName, toppingCount, existingString){
    if (toppingCount > 0){
        let picLayerTemplate = '<img class="burgerLayer" src="assets\\self\\LAYER_ID.png" alt="LAYER_ID">';
        var toppingLayer = picLayerTemplate.replace('LAYER_ID', toppingName);
        var newLine = '</br>';
        for(var toppingI = 0; toppingI < toppingCount; toppingI++){
            existingString = existingString.concat(toppingLayer).concat(newLine);
        }
    }
    return existingString;
}

// Updates the topping count 
function editTopping(name, isAdd){
    let id = '';
    let val;
    switch(name){
        case 'patty': 
            id = 'patty';
            isAdd ? hamburgozy.patty++ : hamburgozy.patty--;
            val = hamburgozy.patty; 
            if (val < 1) { 
                val = 1;
                hamburgozy.patty = 1;
            }
            break;
        case 'cheese':
            id = 'cheese'; 
            isAdd ? hamburgozy.cheese++ : hamburgozy.cheese--;
            val = hamburgozy.cheese;
            if (val < 0) { 
                val = 0;
                hamburgozy.cheese = 0;
            }
            break;
        case 'lettuce': 
            id = 'lettuce';
            isAdd ? hamburgozy.lettuce++ : hamburgozy.lettuce--; 
            val = hamburgozy.lettuce; 
            if (val < 0) { 
                val = 0;
                hamburgozy.lettuce = 0;
            }
            break;
        case 'tomatoes': 
            id = 'tomatoes';
            isAdd ? hamburgozy.tomatoes++ : hamburgozy.tomatoes--; 
            val = hamburgozy.tomatoes; 
            if (val < 0) { 
                val = 0;
                hamburgozy.tomatoes = 0;
            }
            break;
        case 'onions': 
            id = 'onions';
            isAdd ? hamburgozy.onions++ : hamburgozy.onions--; 
            val = hamburgozy.onions; 
            if (val < 0) { 
                val = 0;
                hamburgozy.onions = 0;
            }
            break;
        case 'pickles': 
            id = 'pickles';
            isAdd ? hamburgozy.pickles++ : hamburgozy.pickles--; 
            val = hamburgozy.pickles; 
            if (val < 0) { 
                val = 0;
                hamburgozy.pickles = 0;
            }
            break;    
        }
    editToppingLabel(id, val);
    renderBurger();
}

// Updates the displayed topping count
function editToppingLabel(id, newValue){
    document.getElementById(id).innerHTML = '' + newValue;
}

// Returns the current count per topping
function getToppingCount(name){
    switch(name){
        case 'patty': 
            return hamburgozy.patty;
        case 'cheese': 
            return hamburgozy.cheese;
        case 'lettuce': 
            return hamburgozy.lettuce;
        case 'tomatoes': 
            return hamburgozy.tomatoes;
        case 'onions': 
            return hamburgozy.onions;
        case 'pickles': 
            return hamburgozy.pickles;
        }
}