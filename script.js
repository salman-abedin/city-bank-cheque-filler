const sealify = () => {
   const checkbox = document.querySelector('#input_ac_only');
   const dom_seal = document.querySelector('#cheque img');
   if (checkbox.checked) dom_seal.style.display = 'inline';
   else dom_seal.style.display = 'none';
};

const commafy = (number) => {
   if (number.length === 4) return number.slice(0, 1) + ',' + number.slice(1);
   if (number.length === 5) return number.slice(0, 2) + ',' + number.slice(2);
   if (number.length === 6)
      return (
         number.slice(0, 1) + ',' + number.slice(1, 3) + ',' + number.slice(3)
      );
   if (number.length === 7)
      return (
         number.slice(0, 2) + ',' + number.slice(2, 4) + ',' + number.slice(4)
      );
   return number;
};

const update = (id) => {
   let value = document.getElementById(id).value;
   if (id === 'input_amount_number') {
      value = commafy(value);
   }
   if (id === 'input_date') {
      value = value.split('-').reverse().join('');
   }
   document.getElementById(id.slice(6)).innerHTML = value;
};

const print = () => {
   window.print();
   return false;
};
