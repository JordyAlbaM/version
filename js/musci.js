





$(function(){
	$('.share').hide();
	$('.pase').hide();
	$('#pause').hide();
	$('.vol-set').hide();
	$('.speed-set').hide();
	$('.musicFooter').hide();
	$('.notifications').hide();
	document.body.style.position = 'fixed'
		$('.search-bar').hide();
	$(".search").click(function() {
  $('nav').hide(500);
  $('.search-bar').slideDown();
});

 $('.menu').click(function(){
		document.querySelector('.menu-bar').style.left = '0%';
		 document.querySelector('.menu-bar').style.opacity = '1'
		 document.body.style.position = 'fixed'
	});
});

window.onload = function() {

	setTimeout(function() {
	  document.body.style.position = 'relative'
		document.querySelector('#loader').style.bottom = '-100vh';
	}, 4500);
}
function ply() {
	$('.pase').show();
	$('.ply').hide();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();
	aud.play();
}
function pase() {
	$('.ply').show();
	$('.pase').hide();
	
	document.getElementById('thumb').style.animationPlayState='paused';
	
	$('#pause').hide();
	$('#play').show();
	aud.pause();
}
function seaback() {
	$('.search-bar').slideUp();
	$('.search-bar input').val('');
	$('nav').show(450);
}















// Songs begin
let aud = new Audio();
aud.src = "https://jordyalbam.github.io/musica-alojada/Sa-lucas.ogg";

function share() {
	$('.share').fadeIn();
}

function replay() {
	aud.load();
	aud.play();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('.ply').hide();
	$('.pase').show();
	
	$('#pause').show();
	$('#play').hide();
	
	$('.songName').text('San lucas');
	$('.songArtist').text('Kevin kaarl');
	
	document.querySelector('#thumb').src = 'https://i.ibb.co/WGNKj1d/Faded.jpg'
	
	$('.musicFooter').show();
}

function faded() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/Sa-lucas.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('San lucas de Kevin Kaarl');
		document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('San lucas');
	$('.songArtist').text('Kevin Kaarl');
	
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function alone() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/Vamonos_a_marte.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Vamonos a marte de kevin Kaarl');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHCEaHBoaHBwcGhwcHBwcHh4aIRwcJC4lIR4rIRoeJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJCExNDQ0NDQ0MTQ0NDU1NDQ0NDQ0NDQ0NDE0NzQ0NDE0NDQ0NDQxNDQ0NDQ0NDE0NDQxMf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEgQAAEDAgMEBQcIBwcFAQAAAAEAAhEDIQQSMQVBUWEGInGBsRMykaHB0fAUI0JScpKy4SQzYoKiwvEHJTVDU3PDFWNks8Q0/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJxEBAQACAQQBBAEFAAAAAAAAAAECETEDEiFBUQQTMmGBFCJxkcH/2gAMAwEAAhEDEQA/AOHKUoSQtgKVCRA0olOcE0qAQhCARKEBAhSyiEhUChKkS5kElF5BU1Z/Vj63sVUBT4h8nsCl5DKjtFGUEJQgQKRo0UbYSl6USPZ6EOKVzrJuVQNBlGVSRZMa0etAwBT5yHEbhad0C0pWgA7rCfd60j6fAjiU2DykkDclewGTEcFCYB+PUpmVEsE1J1p7k1zNFLTM/HH+iKlLTnp7VNohLTJ4fHuStbbT4unh1tCfjkhjSDCgZ5MfASK75MoV2rKSQgohdQJUFCBCEwhb2ycJT8k6rUZn64ptbmLAOqXFxLbnQQBzV9lWmD1MNQH2g9/i+PUsZZRyy6uON1XJSnNpk6AnsBXaU8W8kNpspNJIADaVMkk2jrNN09+0MS0lrqj2EGCGnIQQdCGQs9zF+onw5ahsTEv8zD1XdjHH2K/T6H4w60sn23NZ+IrUfVqP8973fac53iU0sNspi+6RZO5yv1V+FR3QrE/RNJ3CKjJI7ioavQ3GjSg532SD7V2GUQI0jwn2J1NgAPbwU768/wDX5fDg6nRrFt87DvHd7iqdTZlZtjSqD9xx8AvShVe3Rzh+8QpBjKot5R+m97j7U72p9f8AMeWOw7xqx47WkexMK9WG0KsCXz2hruG5wKa7GOPnNpu7abPYFe9ufX4+48rJCRq9QeKb/Ow2HP7hHg4KF2z8I6xwjNY6rnt9pTujpPren7eaFIV6C/Y+CI/UPb9mr72qs/o5gzocQzT6jte8K98bn1fTvtxIO9WA8ZV0j+jWH+jiHjhmpgj+Fygf0ab9HFU/3mPb/KVO6Ok6+F9ufJtCmoOBMR36rVf0YqfRrUHdlTL+MBNHR/Eg2Yx/JtWk4n0OlPDU6mN4rPqMaAZsO257vaqz6k23DT3rQrbBxUknD1T9lhcP4ZVJ+CqM8+m9o/aY4eIV01uIXtSNKA4BKBKqpqNa9yrtN4Oa0zaOM7uxZ4aIj1hPoVIt3LNg0KThYTEWO4d/pSgCST8BQUnSCdePMSFFiasNDTrvTXkFTGCTB8UKnmHD1j3IWtQPQ0JYQVsNSgJSkBQdLsinODd/v/8AGpBS8E7o6Zwj7f57d/8A23Wt8XXRdGMJSfWAqRpLW7nO4E8tY3rhl+T53W3l1e2e2x0Q2DkAr1B1yOoCPNaR50fWPqHarvSHo+2uM7ABVG+3WA3HnwK2ab9AYDonLMmJUVWu5tVjOrDw8kkw7qxAA+lqq9v2sZh23h5a+gWktc0hzTBB1BTwySul6XV6bnw1oL2ec6f4ecflxWC0aLNfJ6smOVku9OrwjKdGg2q6mKhc6BOg1G+Y04b1Vx7qLgHUhlJ85sWB4jd6OSmwWNq0WgFodTdcA6aXg+hTYyix9IVmMymYcBp2j1cNVeYudmXT1jrxN2Wef8ysdtMucGjUkDvJstbbuy20msc0GNDcm+4303pNgYfNVzHRozd+g8Se5a1fBudTqtLmuLnF7IOm+PVHeUk8HR6Pd0bdebx/DkWiSBzvp2d60NubL8i5pbJa4amJBGosBy9aptbfwXVbRIqufQNjlDmH9oT8dkpJuMdDDHPCz3405raGCFItAcXSwOvG8ngqTvaCtvpECHU5EHyYHrKxo1WcuXPr4zDOyFweCdUeGAgE5tZjSVXrUoLgd0acjFls9H//ANDe134Ss3Ft67+1w/iKa8LqfbmX7sQN2e5wc5oGVkF14MOmPaqnyFxY57Wy1sBxkWzWG+V0mzR8zih+y3+ZVsE39DxI5s/EFdO2GMsn7lv+nP4LDue7K1rnujQCT28gq+0KDmuLXMIdvaRB8NF02yapp4StVYYe5wbm3gAT7Ssbam0X1soeQS0EB0DMQYNzv5fmp4b1jJLebP4YzhF4PqTG46o0QH1G9j3DwK7bofQYKdR9TzarhQH7wMjvkDuXHuwuStkfIyvyPOlg7K4+iSq74yzGX5QHa1Uf5jidOt1p+/Kq4yp5Sk578mdr2AFrGsdlc18yWASJYNeNtV1nSp7Wh9J2FaxrS3yNVjcsjm7RwIm3tuuSqAGhUMAQ9nafPB8VuPRh4umawg3I7uPJSGmAYvO+Lxy7UjGR2+sDX0ppfoB8fmq7nsMTBIA3Tz4qB7jv1nfqpXOtzTHGw+N6QK2lO7wQrNF4AFihBVSpYsgLoEITXCyfCEHVdFQfklQ/+Qz/ANbvUtFsi4N7QezwVHonTc7DVWsDnEVmOytGYxkcCYiY0vzWvT2bX/0n94dOnP4uuGU/ufK+pxtzum/0TrOfXqOe4ucWASeAcIHxxKl6aSPIkEgguMixB6sd6xsFhcRTJLZYSIJzMFtY6xUmKo1nx5So0x9aoyBOu9N+NL93L7XZq7+WO9s+j4+OalywB2q18kaNa1EcfnAfCUjnUBY4mj94nwas6ry/bzvptbO2iWNyPYHtmQDu9Rt70YzaOcBrWBjAZgb9eUKPDYZjmFza1PKLFxcRHaSLaj0o+Ts1Feiex4PgFrzrRZ9R29tnj/h1DF5aT2AdZ1p4DSPWfSoNm4jyVRrrkXBA1giPzUrsMDpUpnsePamfJDucz749pTyxPuyy644RYlzS4ltmkyJ1En4Ct7Qx2aq2qyRAETa4me4gqH5I76zT++33pfkDuI7nN96nkn3ZLJObvj4O29jW1Xtc2bCDNoMkrLbqr79nP3AffZ70z/p9T6v8TPellpnOpnblZd39H7JrBlUOcYaCZMH6p3DuU9XDYUlzm1nSZMEGJN+CrDZ9WCMszrdvvUR2dU+oVW8MsscOy479+ZU+y67G52PkNqNDSReCJg27T6kmNfSpUXUmVM7nuaSQLBrTIG+8qL5DU+o70Ko7Ztaf1b9eBU21hnnMe3t/W9X2n2LWY6nUoVHZWvhzXHQOB3+r0KjtnB0qeQNq+UeZLi0gtA3QePu3KQ7OrC/k36fVKq1NmVtfJVPuO9yjpjcrjq48e2q7a4w2HoMYym9zmmo4O62VxMt00dqO5Y/SljX1mVgYZXax7iL5TZrhHEQO0kqJ+za2+jU+4/3KnW2dVH+XU+473Ja9Ezys1Z4dLS2ZUpMq+VqMfg/JOyvJDpnzMu8Om0Axw3Lisg8jXIAkMY7QW+dYD+JWamCeBBY/va6O3RRmkRSxEtI+a3g7qlM+xaldcct5TTAY6JSNieHBA0Q8b1t6xUduSawle3f6ENlUXKFUBoBIQq/kOY9KRRRKUpUkLoAhNqOgJ6R7ZCIbQxb2XY9zTES0wnP2jVOtR/3nKq4JVnSXGX0kOJedXuPa4lMLzvJ9KaEqGpBCEJCqrvNigHY+J+0/wYuEAHALvthD+5cV9p/4aa4FYx9gDOSlZ6Exrk/sVoa88z6Sla902cfSU4tkJlM8U9JqJhWdue77x96X5S767/vO96bCR4UTtnwecU/67+57venfKqn+o/77veq8pzUOzH4SnF1RPzj/AL7vekGNqf6j/vu96jebQo2FU7Mfh2nQ17nh+dxfDbZiTGnHguadtKrb5x/3iuk/s/u6p2eMLkmiZ5LOvJ2Y/CZ20q3+q/7596UbXxAj56p993vVJNK1pe2fDZ/6xiAP11Qfvu96qYjaVd4yvqve3g5xInvUbxc8lA7QKQ1ChPJm0JgfATmO0V0pWuuE5zr2UT3bk4MuoHZ0JsckIJJG5Cqolb2q3CVVW1CFO85YMtMibGSJkQeBtpzQRV271GpW1OMJlUXUQ1BQEhQKhCCqO/6Pt/uXFH9p/wCGmvPyvRNgf4Jivt1Pw0152FjH2tLCAEIBWkSEEaJQ2yjJlSUgpQ5hhLIcmTuTmMjmoGEC6Vh4p7hohjRmO8JsK7SyhY23BWKpAsoKbolJwOx/s8PzjxxauVZZ5H2h6j7V0v8AZ4fnnDl7/YFzGJGWo7k93qcVPYiG9NcOCmIv23Ub7Fa2LD3e5QFSBRPapAxSsbAukey0p2XTsVtDYE6707KmxdSE2UCZviyEoePj+iRBWQEJVsIhCAgVSHEuy5ZEcCG+MSNVElUNgFEpAllUCQIQg9E2D/gmK+2/wprzteibD/wTFfaf/wAa87CxjzVpUFCFtBKJQiVArXp2dMXRdC8NNfOWBwYJHIz53CRzI1UyuptrHHd0xfJuO7S/PthBcBpvXre28K2sw08l4Ja+BlB8e7xXlGLwj2EZmluYZmzoWyRI4iyxjl3Llh2o6rh3KNjbJSZI9aSmtsOp6BO/STPD+VywNpgCrU4Z3/jK3OgpjE34eAP5LF2wIxFYf91/4yp7EFNw7OChfuUjac70jxcJ7DnaoeN25SVBvhQO1CB+qdVbZMzXslrEiEDA09vinPS0+JRUfeEEeb4lCSUKiNEpULQQpUhSoBCEgQLCISoIUCIRCFR6FsY/3HiPtP8AFgXngXoWy/8ABK32nfjYvPoWMfa0IRCRbQqQBCVALpuhOLyvqUiJ8ow5d0uaDYdoPqVfZWww4Bz5M3DRw3TvXSYGhSa9mZoDWPsR9G0A25lc8/ONjWOXblK7TyhDCS0ixgSDuncvJNv4ytWreUqMLIAYGiS0NbNs2+5J716sdo0mtnOHuiwaZn3LlKjJM/WPqGvuXLpTm2OnVy3w8+ATqAMrotobJa4FzGw4CYboY1EbvyK52h50LttxdH0NtiRwhZXSC2Jr/wC44+lxWh0VMYlh3H3hVuk7B8prbuvNucH2qTkZbHxdDyS7nM8FGSpKbrqhXPKgcrD3egqBu9IFpm47VNUJNtyhYPGE8G5Sg7EBKTdBCCNCchUQoQAiFoCEpCRQEJWhBStF4QLCaE8JhUCEoQSlaFR32z3/ANyVRxc7/wBjFwQErvcMY2E/m/8A52j2Lg1jH2tMIQUp7EOG+FtDVPg6Od4bHEnuE+yFAtLYP63X6JjtslHXYVsOjvB9vqPoCkn1z71HSb1W8tOXL44BI06TwB7DCyi0HaDeUyo6ATwEDko2P63Z4pa8ZY4ns1PuQSUhAmIkegc+C4bGU8lZ7dIcY7DceK7ljs2mnEeAXHdIWRiHEDUNPqg+CQiz0fqAYmmf2gPSRCTpS79Kq2+kPwtVTYlT5+nP1x4q10mP6TUgC5E/dbop7VjvTHFK8JSFoK53FDUZbjggn+igUa6Jc0JpAT26XHsQIUSmpUCISwEII4QlhLC0psJ5YlDUkKIYnM1CcBCVut9E2GtSe5PLTO9MyoGhqRpUgA3zyUbj2IO+eY2EOJf/APSfcuGLSRMdq7mq0nYlMDUv3f77yuXwWzM1y8sOo9lx8BZlkVklTspy7JOpAnnv7pXQvwDBnjKYsXAEg8d1zfhu0VdlJjDvJdmyhokkDUdk7+xTvNKFTZZa0uJuBp+aZsQxWZ3+BXQYPCmXF4INwA4zYwQIiO/VYGOaynVBYZGpEyRcy3TgrjlvwtjsKNYHQqBhvdwMGPjuVLA1y8AmAObjrCWs0h7iTF7k6Rx7Et0w0PKAb+dpOvYFm7V2i3LlE57ZRzkXWZitoP8ANZppIFzNoA+Ct7ZnRR9NnlajGknrEa5B4TxS2TlZjalwDXZGh35nnY27Fg9IxFUa3Y0c9TK6LEPykAX4xu7eaWvhKTus4TIjMdZtoJgf1UuUiybchs9gbVYd0zzHrVrpKP0l/cf4R7QVIzZxa7PM3OgJBExrAvZP6S2rF0WcAdCNZMXGuid26ljEyz2JKsTb80+lwjj4JpF7dy0hrJDtOUJwBgm6Wd9vj4KWZtu9V0DAb3kpDyTie1KHRPEQB65RTQLp7wmaaFOL5E24fEIEgcfFCI5lCBsJyXRB1CKA3eSlSOCkyhEMlIRB9yVlzHwJ3pXsyk6SNI5GEDnvmD8WULzdSMZIufo8E+m0ZYgSDqBe/wAcFOBAWjv53Ubx6VO2nqZ9B0seCcylmBMazl3+rt8VrY77D0gdlUAZ1mBInrvOoWU7C5GEu8105BJEcHA8RwWszFNZs3Dl1x1ZaDciHm3G+5Y7az6n0cjCIGhOUEAzvBMH0DULhd7bmtK9N7y0saCbzmiIPDnPo5qzSoZAD9My4yIydZ3VbN/NI3bypKdJwuLzaCZtJElwtu0Uj6fm3zEO60EnLmsBE6yB61NmmXtuq9lMEOIL3RO/QyQdRoBZZOytnGq4n6I9Z4LU6QGacWGR9+3Sx0+kE7o+Yp9s8rArpjdY+Gcr5SPjD5XwC1sBzTwJggcDee5anSLYzxh/lDTAOVzmcGkgCO8tmdy5jbeJL6nkxZrTe+pIF+6fFXcDtZ7C/PNVr2Gm5rnnQ6QTMQfjhLL4sXGzWq3+gex2Oaa7wCcxbTB0GUdZ/rjuWr092iadOmxriMziSBqQ0CB6SPQo9jbbw9HDsLnt6rQ2NHZrZyWC/nu3bmyuO6Y7TbXrBzCchaAJF4a4gG97kErExuWe66WyY6jb2XTkS4XJvPnd/oVvE4QETAtxFtPGYVTZbpa1290GOFtFpYjCPqMhrzTIh2YCdNxExEkTrork548uc8uQ40nTnc49URxkamFJjWh73Ne3q5ze0ls6ox9AS4+UBhzCTk85wIzNEQG66CbDWxUeMe8Oe/VkWaA8RzAkWJkzpbtiFumbisCRZrJGaJaQSeRGoMblRbTgZjF9BwnQrpnUQ9lG8kl9QmermzBobaPq+orDx9OoSXFrWsa7UADXdbUq45b8MqDm9XfMmey3tKGWnu7+XqTq0DfII1jW+qYQdYN79q7IHuO5LzndM8TJ04JPJjUm3inPby0OvxZA0tsY1GkXBnwQ2mYPDlFj8SlL7+PoT6gb3EcLWHJTao8nMfHchEt4IVQspGiTESjMnUgJ9CNJC0axu7vFNdZPjdoky7kEdNt7g/0v7E+sIM3km/GfghND9CN4/JJUO/8AqdEQgJFkocRx/JI1pOtlKSBw0GnplAU2gkzYDQc4UmEYXnq5tcoAMW113aTPJRsbpBJnf28lu7EoAODR+QnKTHqtyWcrqNSbXKGFzBgJL/JgtvemG5rBrewbzr3JWUi90NENvciwgt3CxNjftWxicpaWDqiNQTIM+86cisnDPy/NvjMwkgiweDmJPI/kuXdtvWls0AGgu6wjQu3chpM7lHiBmLQOo0iTDWkty3jgDzVrCsFw6C7WI3nfHDUKrUZDwwnqGSL3Jkb9bEz3hZ2tYvSJjWUgG6OcPf8AyhS7HpnyTOd/YPBLt+gw0zJjK4FhGkkXZczfssQeKs7IcMjOAaPALpPxc7y5jaQiu+frT6lew9PMHdYCBYHetnaey21Gl8HO2OsNIkXdyEqhV2a9onLmbpmG/TUazdauUsSRmV2O4T2QVUxLTmbIItv+0fetvAbMcXdQOPbMDtKZ0hp9ag2AACRIF5LmzJ3nRJl50adFhBcD4gf0Wvh4IcNJaRPLQ69qxsAZidY9KuvrwBeBqW7zqLHjugLGS48sWvs1lGWtbLA2bmwyh2Z0mxMAAG8Fx0lNZWZUOZ+aT1XFo6zfODWgaEQ6Y0Cle9wvUZvytJgQC0EnLvY2CB4KClhIqMc1wNN3VZEAh5uG23ki27TgYzfPsy/S1hwfIAm0EsgiLkkg97j6+1WKrGNY7MM30ndW4tzuTOgvbSVHjcfkf5JlMOII1GrszQ1xuLyAJked3LSY9lUCWgyJvduYWO/X81j9mMcgcKHtc9rDlaMshs5nwCByHZ61QxLXDqkjtHx6l11Si1hDoJFpIndFpNhIiBpBCycfRYczxeSSQdW3OnbK6zJbi5+mLTFge6UCnIzmYMx296nqgZQ25jfw3BRMfbKbDlrO7x5Loxo5jOoXdx7Tw9aivAvoD7/SrWJw4Y2CQ0i5BOrpOndCQPaBILQdLB3iZEpv4RUqNEmw9KE/yg4j0j3IWg12g7VIN3afwlKhSqR30VYOnefwpUJWopP39vvTsT53xzQhPbKzhz1D3+xMpaH43hKhBXofrB9r2roth6Dt9qEKZ8NY8t7H+eRunT0p9Gk3K3qjzjuHFCFwdDaO7s9hUeP+h2/ylCFD0wekf6kfbH4XK5sf9WzsH4WoQuuP4ueXK69x8nrqQDzGbQ8UmGcZIm2Vtu9CFmtY8NEWJi1tywek/wCpp/bnvh10IUw/KLlw0MJ57uweAWu8fNjs9pSITJnBiUrvE3638r1HiGjIy30we/j2oQpeSpdpfr/3z+Nqt7APnDd17fvlCFj0TlbxTBBMCcxv3OWdgmgsfInT2oQtTh0cVjLPfFusVDS84do8QhC9E4cKsVvf/KoSOr3oQkZh9Rgk2CRCFpX/2Q=='
	
	$('.songName').text('Vamonos a Marte');
	$('.songArtist').text('Kevin kaarl');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function bad() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/Photograph.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Photograph de Edd Sherdad');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('Photograph');
	$('.songArtist').text('Edd Sherad');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function ex() {

	$('.ply').hide();
	$('.pase').show();
	
   document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	
	 document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/Dandelius.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('');
	document.querySelector('#thumb').src = 'https://akamai.sscdn.co/uploadfile/letras/albuns/9/a/1/c/575531493372251.jpg'
	
	$('.songName').text('Dandelius');
	$('.songArtist').text('Ruth B');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function monster() {
document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();

	$('.ply').hide();
	$('.pase').show();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/she.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('She dont give fo - Khea');
	document.querySelector('#thumb').src = 'https://i1.sndcdn.com/artworks-000252711917-64ey4e-t500x500.jpg'
	
	$('.songName').text('She dont give fo');
	$('.songArtist').text('Khea');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function someone() {
document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();

	$('.ply').hide();
	$('.pase').show();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/ojitos.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Ojitos lindos -  Bad bunny');
	document.querySelector('#thumb').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRML-PC56lCZS1DuXC4yDbizl7i8Kbc0TEN8cycs40nBw&s'
	
	$('.songName').text('Ojitos lindos');
	$('.songArtist').text('Bad bunny');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function senor() {
document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();

	$('.ply').hide();
	$('.pase').show();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/tequiero.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Te quiero - canservero && Liana valva');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/VpCkJ8Q67sI/maxresdefault.jpg'
	
	$('.songName').text('Te quiero');
	$('.songArtist').text('Canservero - Liana valva');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function good() {
document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();

	$('.ply').hide();
	$('.pase').show();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/porti.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('3 A.M - Por ti');
	document.querySelector('#thumb').src = 'https://i.scdn.co/image/ab67616d0000b2737b83959bec6017e5e2e2cbb3'
	
	$('.songName').text('Por ti');
	$('.songArtist').text('3 A.M');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function alone() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/Vamonos_a_marte.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Vamonos a marte de Kevin Kaarl');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('Vamonos a marte');
	$('.songArtist').text('Kevin Kaarl');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function love() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/pagina-principal/audio/fuentes.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Fuentes de ortiz - Ed Maverick');
	document.querySelector('#thumb').src = 'https://i.pinimg.com/originals/61/1e/a4/611ea47e992e4b9b8919c66ec65fa51f.jpg'
	
	$('.songName').text('Fuentes de ortiz');
	$('.songArtist').text('Ed maverick');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function romance() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/yellow.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Coldplay - yellow');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('Yellow');
	$('.songArtist').text('Coldplay');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function asit() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/Harry%20Styles%20-%20As%20It%20Was%20(Lyrics).mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Harry Styles - As is Was  ');
	document.querySelector('#thumb').src = 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Harry_Styles_-_As_It_Was.png/220px-Harry_Styles_-_As_It_Was.png'
	
	$('.songName').text(' As is Was ');
	$('.songArtist').text('Harry Styles');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function querer() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/Querer%20Querernos%20LETRA%20-%20canserbero.mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Canserbero - Querer querernos');
	document.querySelector('#thumb').src = 'https://i.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaWhyLWluZ2VzdGlvbi1waXBlbGluZS1wcm9kdWN0aW9uLWRpc3Ryb2tpZC8yMDIyMDMxOTIwNTA1NDY4MS8xOTY3NzkwNzE0MzAvcmVzb3VyY2VzLzE5Njc3OTA3MTQzMC5qcGc=?ops=fit%28480%2C480%29&sn=eGtleWJhc2UyMDIxMTExMDpfM9Iylk-isGMiMgSXBlkG280QRstk5QCU1x7lpu5KcQ%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1ahJ9ekBKwf7UslJDIRMVUNFyA2z3TWJGOpq3J8EtQjd4fFKPffpIRRxNQsIeB4MoA4KJ_U-RnA1ohPZUsDUji4AQC_z8y4RsE1xvuAWk2G9pZy7pjldedysJfdwX0T8mTpjxt2TJMtacR0lq3NMM8_x33Zd6pR8WsGkazFveHec5FhjNEBluxMNsrmbT0Hs13JIBk0eHax1ppIVbcZyjYzHmDzJ2UjxAO_2XjR-ul3xsE01E7zKwYU_uCDGqddH4XEBUXx9xl0XEZfNG_-FszR3fUoq5o5m8lHdz9Zgx9vrevUGb3waSWl'
	
	$('.songName').text('Querer querernos');
	$('.songArtist').text('Canserbero');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function ninabo() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/Dstance%20-%20Ni%C3%B1a%20Bonita%20(Versi%C3%B3n%20Ac%C3%BAstica).mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Dstance, Mellisa robles - Niña bonita');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/myvQnX9jtXo/maxresdefault.jpg'
	
	$('.songName').text('Niña bonita');
	$('.songArtist').text('Dstance, Mellisa robles');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function arrancar() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/WOS%20-%20ARRANCARMELO%20(Letra-Lyrics).mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('WOS - ARRANCARMELO');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/_NXClYscHpE/maxresdefault.jpg'
	
	$('.songName').text('ARRANCARMELO');
	$('.songArtist').text('WOS');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function lugarse() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/Jay%20Wheeler,%20Noreh%20-%20Lugar%20Seguro%20(Letra-Lyrics).mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Jay Wheeler, Noreh - Lugar seguro');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/1SL7hmtMPMs/mqdefault.jpg'
	
	$('.songName').text('Lugar seguro');
	$('.songArtist').text('Jay Wheeler, Noreh');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}

function better() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/porsi.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Por si me faltas - Dante');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/7rpqpi8Ta38/maxresdefault.jpg'
	
	$('.songName').text('Por si me faltas');
	$('.songArtist').text('Dante');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function roar() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/amapolas.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Amapolas - Leo Rizzi');
	document.querySelector('#thumb').src = 'https://i.scdn.co/image/ab67616d0000b27318330837f8c498291c4b44b7'
	
	$('.songName').text('Amapolas');
	$('.songArtist').text('Leo Rizzi');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function loveme() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/yoquisiera.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Yo quisiera - Reik');
	document.querySelector('#thumb').src = 'https://i.scdn.co/image/ab67616d0000b2739b06af2eced0da41219d0e7d'
	
	$('.songName').text('Yo quisiera');
	$('.songArtist').text('Reik');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function yummy() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/theof.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('The side of paradise - Coyote theory');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('Coyote theory');
	$('.songArtist').text('The side of paradise');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function cheap() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/musica-alojada/mehaces.ogg";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('Me haces bien - Josue Alaniz');
	document.querySelector('#thumb').src = 'data:image/jpeg;base64,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'
	
	$('.songName').text('Me haces bien');
	$('.songArtist').text('Josue Alaniz');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}
function musicaone() {

	$('.ply').hide();
	$('.pase').show();
	
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('#pause').show();
	$('#play').hide();

	aud.src = "https://jordyalbam.github.io/audios-v4/Morat%20-%20No%20Se%20Va.mp3";
	aud.play();
	$('.musicFooter').show();
		$('.musicFooter marquee').text('No se va - Morat');
	document.querySelector('#thumb').src = 'https://i.ytimg.com/vi/DqOod-jmkKg/maxresdefault.jpg'
	
	$('.songName').text('No se va');
	$('.songArtist').text('Morat');
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
}


























// Song settings start

function preview() {
	document.querySelector('.songPreview').style.top = '0vh'
	document.querySelector('.songPreview').style.opacity = '1'
	
	$('.search-bar').hide();
	$('.search-bar input').val('');
	$('nav').show();
}
function re() {
	aud.load();
	aud.play();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	document.querySelector('.notif').innerHTML = 'Please be patient while the song loads';
	document.querySelector('.notif').style.left = '15%';
	$('#pause').show();
	$('#play').hide();
	
	$('.pase').show();
	$('.ply').hide();
	
	
		var notif = $(".notif");
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 0});
}
function stop() {
	aud.load();
	aud.pause();
	
	document.getElementById('thumb').style.animationPlayState='paused';
	
	$('.pase').hide();
	$('.ply').show();
	
	$('#pause').hide();
	$('#play').show();
	$('.musicFooter').hide();
	
	document.querySelector("#vol").value = 100;
	document.querySelector("#speed").value = 100;
	aud.playbackRate = 1;
	aud.volume = 1;
	document.getElementById("per").innerHTML = '100%';
	document.getElementById("per2").innerHTML = '100%';
	
	document.querySelector('.songPreview').style.top = '-100vh'
	document.querySelector('.songPreview').style.opacity = '0'
}
function play() {
	$('#pause').show();
	$('#play').hide();
	
	document.getElementById('thumb').style.animationPlayState='running';
	
	$('.pase').show();
	$('.ply').hide();
	
	 aud.play();
	
}
function pause() {
	$('#pause').hide();
	$('#play').show();
	
	document.getElementById('thumb').style.animationPlayState='paused';
	
	$('.ply').show();
	$('.pase').hide();
	
	aud.pause();
}
function loop() {
	if (aud.loop == false) {
		aud.loop = true;
		document.querySelector('.repeat').style.background = '#99f'
		document.querySelector('.notif').innerHTML = 'Loop on'
		document.querySelector('.notif').style.left = '40%';
		
		var notif = $(".notif");
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 0});
		
	}
	else {
		aud.loop = false;
		document.querySelector('.repeat').style.background = 'transparent'
		document.querySelector('.notif').innerHTML = 'Loop off'
		document.querySelector('.notif').style.left = '40%';
		
		var notif = $(".notif");
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 1});
notif.animate({opacity: 0});
	}
}
function volshow() {
	$('.vol-set').slideToggle();
}
function volhide() {
	$('.vol-set').slideToggle();
}
function speshow() {
	$('.speed-set').slideToggle();
}
function spehide() {
	$('.speed-set').slideToggle();
}
function hidprev() {
	document.querySelector('.songPreview').style.top = '-200vh'
	document.querySelector('.songPreview').style.opacity = '0'
	$('.vol-set').hide();
	$('.speed-set').hide();
}
function vol() {
	let range = document.querySelector("#vol");
	document.getElementById("per").innerHTML = `${range.value}%`;
	aud.volume = range.value/100;
}
function speed() {
	let speed = document.querySelector("#speed");
	document.getElementById("per2").innerHTML = `${speed.value}%`;
	if (speed.value == 10) {
		aud.playbackRate = 0.1;
	}
	else if (speed.value == 11) {
		aud.playbackRate = 0.11;
	}
	else if (speed.value == 12) {
		aud.playbackRate = 0.12;
	}
	else if (speed.value == 13) {
		aud.playbackRate = 0.13;
	}
	else if (speed.value == 14) {
		aud.playbackRate = 0.14;
	}
	else if (speed.value == 15) {
		aud.playbackRate = 0.15;
	}
	else if (speed.value == 16) {
		aud.playbackRate = 0.16;
	}
	else if (speed.value == 17) {
		aud.playbackRate = 0.17;
	}
	else if (speed.value == 18) {
		aud.playbackRate = 0.18;
	}
	else if (speed.value == 19) {
		aud.playbackRate = 0.19;
	}
	else if (speed.value == 20) {
		aud.playbackRate = 0.2;
	}
	else if (speed.value == 21) {
		aud.playbackRate = 0.21;
	}
	else if (speed.value == 22) {
		aud.playbackRate = 0.22;
	}
	else if (speed.value == 23) {
		aud.playbackRate = 0.23;
	}
	else if (speed.value == 24) {
		aud.playbackRate = 0.24;
	}
	else if (speed.value == 25) {
		aud.playbackRate = 0.25;
	}
	else if (speed.value == 26) {
		aud.playbackRate = 0.26;
	}
	else if (speed.value == 27) {
		aud.playbackRate = 0.27;
	}
	else if (speed.value == 28) {
		aud.playbackRate = 0.28;
	}
	else if (speed.value == 29) {
		aud.playbackRate = 0.29;
	}
	else if (speed.value == 30) {
		aud.playbackRate = 0.3;
	}
	else if (speed.value == 31) {
		aud.playbackRate = 0.31;
	}
	else if (speed.value == 32) {
		aud.playbackRate = 0.32;
	}
	else if (speed.value == 33) {
		aud.playbackRate = 0.33;
	}
	else if (speed.value == 34) {
		aud.playbackRate = 0.34;
	}
	else if (speed.value == 35) {
		aud.playbackRate = 0.35;
	}
	else if (speed.value == 36) {
		aud.playbackRate = 0.36;
	}
	else if (speed.value == 37) {
		aud.playbackRate = 0.37;
	}
	else if (speed.value == 38) {
		aud.playbackRate = 0.38;
	}
	else if (speed.value == 39) {
		aud.playbackRate = 0.39;
	}
	else if (speed.value == 40) {
		aud.playbackRate = 0.4;
	}
	else if (speed.value == 41) {
		aud.playbackRate = 0.41;
	}
	else if (speed.value == 42) {
		aud.playbackRate = 0.42;
	}
	else if (speed.value == 43) {
		aud.playbackRate = 0.43;
	}
	else if (speed.value == 44) {
		aud.playbackRate = 0.44;
	}
	else if (speed.value == 45) {
		aud.playbackRate = 0.45;
	}
	else if (speed.value == 46) {
		aud.playbackRate = 0.46;
	}
	else if (speed.value == 47) {
		aud.playbackRate = 0.47;
	}
	else if (speed.value == 48) {
		aud.playbackRate = 0.48;
	}
	else if (speed.value == 49) {
		aud.playbackRate = 0.49;
	}
	else if (speed.value == 50) {
		aud.playbackRate = 0.5;
	}
	else if (speed.value == 51) {
		aud.playbackRate = 0.51;
	}
	else if (speed.value == 52) {
		aud.playbackRate = 0.52;
	}
	else if (speed.value == 53) {
		aud.playbackRate = 0.53;
	}
	else if (speed.value == 54) {
		aud.playbackRate = 0.54;
	}
	else if (speed.value == 55) {
		aud.playbackRate = 0.55;
	}
	else if (speed.value == 56) {
		aud.playbackRate = 0.57;
	}
	else if (speed.value == 57) {
		aud.playbackRate = 0.57;
	}
	else if (speed.value == 58) {
		aud.playbackRate = 0.58;
	}
	else if (speed.value == 59) {
		aud.playbackRate = 0.59;
	}
	else if (speed.value == 60) {
		aud.playbackRate = 0.6;
	}
	else if (speed.value == 61) {
		aud.playbackRate = 0.61;
	}
	else if (speed.value == 62) {
		aud.playbackRate = 0.62;
	}
	else if (speed.value == 63) {
		aud.playbackRate = 0.63;
	}
	else if (speed.value == 64) {
		aud.playbackRate = 0.64;
	}
	else if (speed.value == 65) {
		aud.playbackRate = 0.65;
	}
	else if (speed.value == 66) {
		aud.playbackRate = 0.66;
	}
	else if (speed.value == 67) {
		aud.playbackRate = 0.67;
	}
	else if (speed.value == 68) {
		aud.playbackRate = 0.68;
	}
	else if (speed.value == 69) {
		aud.playbackRate = 0.69;
	}
	else if (speed.value == 70) {
		aud.playbackRate = 0.7;
	}
	else if (speed.value == 71) {
		aud.playbackRate = 0.71;
	}
	else if (speed.value == 72) {
		aud.playbackRate = 0.72;
	}
	else if (speed.value == 73) {
		aud.playbackRate = 0.73;
	}
	else if (speed.value == 74) {
		aud.playbackRate = 0.74;
	}
	else if (speed.value == 75) {
		aud.playbackRate = 0.75;
	}
	else if (speed.value == 76) {
		aud.playbackRate = 0.76;
	}
	else if (speed.value == 77) {
		aud.playbackRate = 0.77;
	}
	else if (speed.value == 78) {
		aud.playbackRate = 0.78;
	}
	else if (speed.value == 79) {
		aud.playbackRate = 0.79;
	}
	else if (speed.value == 80) {
		aud.playbackRate = 0.8;
	}
	else if (speed.value == 81) {
		aud.playbackRate = 0.81;
	}
	else if (speed.value == 82) {
		aud.playbackRate = 0.82;
	}
	else if (speed.value == 83) {
		aud.playbackRate = 0.83;
	}
	else if (speed.value == 84) {
		aud.playbackRate = 0.84;
	}
	else if (speed.value == 85) {
		aud.playbackRate = 0.85;
	}
	else if (speed.value == 86) {
		aud.playbackRate = 0.86;
	}
	else if (speed.value == 87) {
		aud.playbackRate = 0.87;
	}
	else if (speed.value == 88) {
		aud.playbackRate = 0.88;
	}
	else if (speed.value == 89) {
		aud.playbackRate = 0.8;
	}
	else if (speed.value == 90) {
		aud.playbackRate = 0.9;
	}
	else if (speed.value == 91) {
		aud.playbackRate = 0.91;
	}
	else if (speed.value == 92) {
		aud.playbackRate = 0.92;
	}
	else if (speed.value == 93) {
		aud.playbackRate = 0.93;
	}
	else if (speed.value == 94) {
		aud.playbackRate = 0.94;
	}
	else if (speed.value == 95) {
		aud.playbackRate = 0.95;
	}
	else if (speed.value == 96) {
		aud.playbackRate = 0.96;
	}
	else if (speed.value == 97) {
		aud.playbackRate = 0.97;
	}
	else if (speed.value == 98) {
		aud.playbackRate = 0.98;
	}
	else if (speed.value == 99) {
		aud.playbackRate = 0.99;
	}
	else if (speed.value == 100) {
		aud.playbackRate = 1;
	}
	else if (speed.value == 101) {
		aud.playbackRate = 1.1;
	}
	else if (speed.value == 102) {
		aud.playbackRate = 1.11;
	}
	else if (speed.value == 103) {
		aud.playbackRate = 1.12;
	}
	else if (speed.value == 104) {
		aud.playbackRate = 1.13;
	}
	else if (speed.value == 105) {
		aud.playbackRate = 1.14;
	}
	else if (speed.value == 106) {
		aud.playbackRate = 1.15;
	}
	else if (speed.value == 107) {
		aud.playbackRate = 1.16;
	}
	else if (speed.value == 108) {
		aud.playbackRate = 1.17;
	}
	else if (speed.value == 109) {
		aud.playbackRate = 1.18;
	}
	else if (speed.value == 110) {
		aud.playbackRate = 1.19;
	}
	else if (speed.value == 111) {
		aud.playbackRate = 1.20;
	}
	else if (speed.value == 112) {
		aud.playbackRate = 1.21;
	}
	else if (speed.value == 113) {
		aud.playbackRate = 1.22;
	}
	else if (speed.value == 114) {
		aud.playbackRate = 1.23;
	}
	else if (speed.value == 115) {
		aud.playbackRate = 1.24;
	}
	else if (speed.value == 116) {
		aud.playbackRate = 1.26;
	}
	else if (speed.value == 117) {
		aud.playbackRate = 1.27;
	}
	else if (speed.value == 118) {
		aud.playbackRate = 1.28;
	}
	else if (speed.value == 119) {
		aud.playbackRate = 1.29;
	}
	else if (speed.value == 120) {
		aud.playbackRate = 1.3;
	}
	else if (speed.value == 121) {
		aud.playbackRate = 1.31;
	}
	else if (speed.value == 122) {
		aud.playbackRate = 1.32;
	}
	else if (speed.value == 123) {
		aud.playbackRate = 1.33;
	}
	else if (speed.value == 124) {
		aud.playbackRate = 1.34;
	}
	else if (speed.value == 125) {
		aud.playbackRate = 1.35;
	}
	else if (speed.value == 126) {
		aud.playbackRate = 1.36;
	}
	else if (speed.value == 127) {
		aud.playbackRate = 1.37;
	}
	else if (speed.value == 128) {
		aud.playbackRate = 1.38;
	}
	else if (speed.value == 129) {
		aud.playbackRate = 1.39;
	}
	else if (speed.value == 130) {
		aud.playbackRate = 1.4;
	}
	else if (speed.value == 131) {
		aud.playbackRate = 1.41;
	}
	else if (speed.value == 132) {
		aud.playbackRate = 1.42;
	}
	else if (speed.value == 133) {
		aud.playbackRate = 1.43;
	}
	else if (speed.value == 134) {
		aud.playbackRate = 1.44;
	}
	else if (speed.value == 135) {
		aud.playbackRate = 1.45;
	}
	else if (speed.value == 136) {
		aud.playbackRate = 1.46;
	}
	else if (speed.value == 137) {
		aud.playbackRate = 1.47;
	}
	else if (speed.value == 138) {
		aud.playbackRate = 1.48;
	}
	else if (speed.value == 139) {
		aud.playbackRate = 1.49;
	}
	else if (speed.value == 140) {
		aud.playbackRate = 1.5;
	}
	else if (speed.value == 141) {
		aud.playbackRate = 1.51;
	}
	else if (speed.value == 142) {
		aud.playbackRate = 1.52;
	}
	else if (speed.value == 143) {
		aud.playbackRate = 1.53;
	}
	else if (speed.value == 144) {
		aud.playbackRate = 1.54;
	}
	else if (speed.value == 145) {
		aud.playbackRate = 1.55;
	}
	else if (speed.value == 146) {
		aud.playbackRate = 1.56;
	}
	else if (speed.value == 147) {
		aud.playbackRate = 1.57;
	}
	else if (speed.value == 148) {
		aud.playbackRate = 1.58;
	}
	else if (speed.value == 149) {
		aud.playbackRate = 1.59;
	}
	else if (speed.value == 150) {
		aud.playbackRate = 1.6;
	}
	else if (speed.value == 151) {
		aud.playbackRate = 1.61;
	}
	else if (speed.value == 152) {
		aud.playbackRate = 1.62;
	}
	else if (speed.value == 153) {
		aud.playbackRate = 1.63;
	}
	else if (speed.value == 154) {
		aud.playbackRate = 1.64;
	}
	else if (speed.value == 155) {
		aud.playbackRate = 1.65;
	}
	else if (speed.value == 156) {
		aud.playbackRate = 1.66;
	}
	else if (speed.value == 157) {
		aud.playbackRate = 1.67;
	}
	else if (speed.value == 158) {
		aud.playbackRate = 1.68;
	}
	else if (speed.value == 159) {
		aud.playbackRate = 1.69;
	}
	else if (speed.value == 160) {
		aud.playbackRate = 1.7;
	}
	else if (speed.value == 161) {
		aud.playbackRate = 1.71;
	}
	else if (speed.value == 162) {
		aud.playbackRate = 1.72;
	}
	else if (speed.value == 163) {
		aud.playbackRate = 1.73;
	}
	else if (speed.value == 164) {
		aud.playbackRate = 1.74;
	}
	else if (speed.value == 165) {
		aud.playbackRate = 1.75;
	}
	else if (speed.value == 166) {
		aud.playbackRate = 1.76;
	}
	else if (speed.value == 167) {
		aud.playbackRate = 1.77;
	}
	else if (speed.value == 168) {
		aud.playbackRate = 1.78;
	}
	else if (speed.value == 169) {
		aud.playbackRate = 1.79;
	}
	else if (speed.value == 170) {
		aud.playbackRate = 1.8;
	}
	else if (speed.value == 171) {
		aud.playbackRate = 1.81;
	}
	else if (speed.value == 172) {
		aud.playbackRate = 1.82;
	}
	else if (speed.value == 173) {
		aud.playbackRate = 1.83;
	}
	else if (speed.value == 174) {
		aud.playbackRate = 1.84;
	}
	else if (speed.value == 175) {
		aud.playbackRate = 1.85;
	}
	else if (speed.value == 176) {
		aud.playbackRate = 1.86;
	}
	else if (speed.value == 177) {
		aud.playbackRate = 1.86;
	}
	else if (speed.value == 178) {
		aud.playbackRate = 1.87;
	}
	else if (speed.value == 179) {
		aud.playbackRate = 1.88;
	}
	else if (speed.value == 180) {
		aud.playbackRate = 1.89;
	}
	else if (speed.value == 181) {
		aud.playbackRate = 1.9;
	}
	else if (speed.value == 182) {
		aud.playbackRate = 1.91;
	}
	else if (speed.value == 183) {
		aud.playbackRate = 1.92;
	}
	else if (speed.value == 184) {
		aud.playbackRate = 1.94;
	}
	else if (speed.value == 185) {
		aud.playbackRate = 1.95;
	}
	else if (speed.value == 186) {
		aud.playbackRate = 1.96;
	}
	else if (speed.value == 187) {
		aud.playbackRate = 1.97;
	}
	else if (speed.value == 188) {
		aud.playbackRate = 1.98;
	}
	else if (speed.value == 189) {
		aud.playbackRate = 1.99;
	}
	else {
		aud.playbackRate = 2;
	}
}

// Song settings end











