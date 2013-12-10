function share()
{
	/* Prepare parameters */
	score = document.getElementById("score").textContent;
	titre="p[title]=My score";
	texte="p[summary]=My score in this game : "+score+"";
	urlSite="p[url]=URL";
	urlImage="p[images[0]=YOUR_IMAGE_TO_SHARE_OBJECT";

	urlShare = href="http://www.facebook.com/sharer.php?s=100&"+titre+"&"+texte+"&"+urlSite+"&"+urlImage;
	document.getElementById("facebook").setAttribute("href",urlShare);
	
}