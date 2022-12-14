let total=0;

function addToCart(element){
	

	let mainEl=element.closest('.single-item');
	let brojKarata=mainEl.querySelector('input').value;
	let cenaKarte=mainEl.querySelector('.price').innerText;
	let imeFilma=mainEl.querySelector('h3').innerText;
	let cartItems=document.querySelector('.cart-items');

	if(brojKarata>0)
	{
		cenaKarte=cenaKarte.substring(1);
		cenaKarte=parseInt(cenaKarte);
		let zbir=cenaKarte*brojKarata;
		total=total+zbir;
		cartItems.innerHTML+=`<div class="cart-single-item">
		                     <h3>${imeFilma}</h3>
		                     <p>${brojKarata} x $${cenaKarte} = $<span>${zbir}</span</p>
		                     <button onclick="refundKartu(this)" class="removeItem">Ukloni</button>
		                     </div`;

		document.querySelector('.total').innerHTML=`<h3>Total: $${total}</h3>`;

		element.innerText=`Dodato`;
		element.setAttribute('disabled', 'true');
		
	}
	else
	{
		alert('Unesite kolicinu');
	}
}


function refundKartu(element)
{

	let mainEl=element.closest('.cart-single-item');
	let cena=mainEl.querySelector('p span').innerText;
	let name=mainEl.querySelector('h3').innerText;
	let filmovi=document.querySelectorAll('.single-item');
	cena=parseInt(cena);
	total-=cena;
	mainEl.remove();

	document.querySelector('.total').innerText=`Total: $${total}`;

	filmovi.forEach(function(film)
    {
    	let imeFilma=film.querySelector('.si-content h3').innerText;

    	if(imeFilma==name)
    	{
    		film.querySelector('.actions input').value=0;
    		film.querySelector('.actions button').removeAttribute('disabled');
    		film.querySelector('.actions button').innerText='Dodaj';
    	}
    });

}