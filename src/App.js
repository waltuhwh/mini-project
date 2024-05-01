import React from 'react';
import './App.css';

function App() {
  
  
    const[dosaIngredients,changeDosaingredients]=React.useState('Rice,Urad dal (black gram lentils),Fenugreek seeds,Salt,Poha (flattened rice),Water');
    const[parottaIngredients,changeParottaingredients]=React.useState('All-purpose flour (maida),Salt,Water,Oil or ghee.');
    const[pooriIngredients,changePooriingredients]=React.useState('Wheat flour (atta),Salt,Water,Oil for frying.');
    const[pastaIngredients,changePastaingredients]=React.useState('Durum wheat semolina, Water,Salt,White or Red sauce');
    

return(
    <div>
    <p>Dosa: {dosaIngredients}</p>
    <label for="new">Type here to edit ingredients for dosa</label>
    <input type="text" id="new" onChange={(dos) => changeDosaingredients(dos.target.value)} />
    <p>Parotta: {parottaIngredients}</p>
    <label for="new">Type here to edit ingredients for Parotta</label>
    <input type="text" id="new" onChange={(par) => changeParottaingredients(par.target.value)} />
    <p>Poori: {pooriIngredients}</p>
    <label for="new">Type here to edit ingredients for Poori</label>
    <input type="text" id="new" onChange={(ppr) => changePooriingredients(ppr.target.value)} />
    <p>Pasta: {pastaIngredients}</p>
    <label for="new">Type here to edit ingredients for Pasta</label>
    <input type="text" id="new" onChange={(pas) => changePastaingredients(pas.target.value)} />
    </div>


);

  

 
  


};


export default App;
