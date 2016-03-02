walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAndrew Mikielski\b/g, "Topsykret");
	v = v.replace(/\bAustin Barry\b/g, "Raanis");
	v = v.replace(/\bBenjamin Bollinger\b/g, "Jhoren");
	v = v.replace(/\bBryan Nelson\b/g, "Bob");
	v = v.replace(/\bDaniel Young\b/g, "Relyen");
	v = v.replace(/\bDave Wyatt\b/g, "Chorde");
	v = v.replace(/\bGeorge Wood\b/g, "Destroygrr");
	v = v.replace(/\bGerald Hurd\b/g, "Jerry Bean");
	v = v.replace(/\bJames Williams\b/g, "Magnitivo");
	v = v.replace(/\bJamie Palesch\b/g, "Myn");
	v = v.replace(/\bJeannette Campbell\b/g, "Sylriss");
	v = v.replace(/\bJessica Rose Itkin\b/g, "Blessing");
	v = v.replace(/\bJeff Corrales\b/g, "Jett");
	v = v.replace(/\bJim Brakoniecki\b/g, "Jacknikolson");
	v = v.replace(/\bJohn Muir\b/g, "Anakis");
	v = v.replace(/\bJonathan Henderson\b/g, "Hendo");
	v = v.replace(/\bJorge Armando Hernández Ortiz\b/g, "Oni");
	v = v.replace(/\bKeith Ross\b/g, "Zulu");
	v = v.replace(/\bKelsey Murphy\b/g, "Ellyrinda");
	v = v.replace(/\bKiersten Wyatt\b/g, "Bhiksuni");
	v = v.replace(/\bKris Davies\b/g, "Fluffy");
	v = v.replace(/\bKristin Kraemer\b/g, "Moondah");
	v = v.replace(/\bMatt Blume\b/g, "Ailias");
	v = v.replace(/\bMichael Granims\b/g, "Granimal");
	v = v.replace(/\bNicole Marija Morales\b/g, "Amitayus");
	v = v.replace(/\bNo Se\b/g, "Ackl");
	v = v.replace(/\bPhilip Arthur\b/g, "Lustickie");
	v = v.replace(/\bRhiannon Laviolette\b/g, "Æriera");
	v = v.replace(/\bRoy Olaer\b/g, "Roy");
	v = v.replace(/\bSean James\b/g, "Lilthumper");
	v = v.replace(/\bTamara Davies\b/g, "Bitsey");
	v = v.replace(/\bTim Scherer\b/g, "Debanda");
	v = v.replace(/\bTommy Timberlake\b/g, "Wndrbrh");
	v = v.replace(/\bTyler Thomas\b/g, "Runkie");
	v = v.replace(/\bXuyang Yu\b/g, "Dunno");
	v = v.replace(/\bZach Dumar\b/g, "Necrowolfs");
        // 1.0.2 additions
	v = v.replace(/\bDebbie Valle\b/g, "Aloriina");
	v = v.replace(/\bAmer Adham\b/g, "Inductor");
	v = v.replace(/\bJustin Fleming\b/g, "Mevan");
	v = v.replace(/\bBharat Balaji\b/g, "Raz");
	v = v.replace(/\bDillon Seegers\b/g, "Blippington");
	v = v.replace(/\bFrederic Carneiro\b/g, "Sherkah");
	v = v.replace(/\bKris Flynn\b/g, "Krahae");
	v = v.replace(/\bLina J Morales\b/g, "Flaxaroo");
	v = v.replace(/\bDouglas Dunn\b/g, "Volarr");
        // 1.0.3 additions
	v = v.replace(/\bSamantha Dotski\b/g, "Sammaa");

	textNode.nodeValue = v;
}                

// mutation observer

var observer = new WebKitMutationObserver(function (mutations) {
    for (i in mutations) {
        for (j = 0, l = mutations[i].addedNodes.length; j < l; j++) {
            walk(mutations[i].addedNodes[j]);
        }
    }
});

observer.observe(document.body, {childList : true, subtree : true});           
