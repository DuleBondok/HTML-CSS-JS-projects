function inflationCalculator() {
	let inflationRate=document.querySelector('#inflationRate').value;
	let money=document.querySelector('#money').value;
	let years=document.querySelector('#years').value;

	inflationRate=parseFloat(inflationRate);
	money=parseFloat(money);
	years=parseFloat(years);

	let vrednost=money+(money*(inflationRate/100));

	for(let i=1;i<years;i++)
	{
		vrednost=vrednost+(vrednost*(inflationRate/100));
	}

	vrednost=vrednost.toFixed(2);
	
	let newElement=document.createElement('div');
	newElement.class='new-element';
	newElement.innerText=`Danasnjih ${money}e ce za ${years} godina vredeti ${vrednost}e.`;

	document.querySelector('.container').appendChild(newElement);
	
}