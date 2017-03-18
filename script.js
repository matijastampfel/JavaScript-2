/*jshint esnext: true, moz: true*/
/*jslint browser:true */





// API KEY REQUEST //////////////////////////////////////////////////////
//EXAMPLE OD CREATE http://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=eL68V&title=%22MataMalic%22&author=%22Mata%22
var key;
var arrData = [];

function loadDoc() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			document.getElementById("apiKD").innerHTML = myObj.key;
			key = myObj.key;
		}
	};
	xhttp.open("GET", "https://www.forverkliga.se/JavaScript/api/crud.php?requestKey", true);
	xhttp.send();
}

///////////////////////////////////////////////////////////////////////////////

// ADD BOOK //////////////////////////////////////////////////////////////////
function AddBook() {
	var title = document.getElementById("titleA").value;
	var author = document.getElementById("autorA").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			console.log(this.responseText);

		}


	};
	xhttp.open("POST", "http://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=" + key + "&title='" + title + "'&author='" + author + "'", true);
	xhttp.send();



}

///////////////////////////////////////////////////////////////////////////////

// VIEW BOOKS /////////////////////////////////////////////////////////////////


function loadBookCall(result) {
let arrData = result.data;
let status = result.status;

console.log("gfgfg", arrData);
			if (status !== "error") {
				var htmlData = "";
				for (var i = 0; i < arrData.length; i++) {
				 	console.log(i);
					console.log(arrData[i].title);

					htmlData += "<div> id:  " + arrData[i].id + "   </div><div> Title: " + arrData[i].title + "   </div><div> Author: " + arrData[i].author + "   </div><div> Updated:" + arrData[i].updated + "   </div>   <br> ";

				}
				document.getElementById("showBookD").innerHTML = htmlData;

			}else{
				loadBook();
			}

}



function loadBook() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {

									var dataLoadBook = this.responseText;
									
									//document.getElementById("showBookD").innerHTML = dataLoadBook;
										


										
									var arrParse = JSON.parse(dataLoadBook);
									console.log(arrParse);
									// arrParse MAY contain a data property but it's not certain
									loadBookCall(arrParse);
								
								} 


					
								//else {
								// 	//var myObj = JSON.parse(this.responseText);
									

								// 	//var dataLoadBook = this.responseText;

								// 	var dataLoadBook = JSON.parse(this.responseText);	
								// 	//document.getElementById("demo").innerHTML = myObj.name;
								// 	//console.log("dataLoadBook2",dataLoadBook);
								// 	showBookD.innerHTML = dataLoadBook[0];
								// 	console.log("http://www.forverkliga.se/JavaScript/api/crud.php?op=select&key=" + key);				
								// }

								
							};
							let url =  "http://www.forverkliga.se/JavaScript/api/crud.php?op=select&key=" + key;
							console.log('url is:', url);
								xhttp.open("GET",url, true);
								xhttp.send();


             	         
                                
								
				

}


// 	var showBook;

// showBook = document.getElementById("showBookD");  // Show book ID get element


// fetch("http://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=" + key + "", {
// 	method: 'get'
// }).then(function(response) {
	 
// 	 document.getElementById("showBookD").innerHTML = showBookD;
// }).catch(function(err) {
// 	console.log (err);
// });

//}
// console.log(this.responseText);
// console.log("success");




/////////////////////////////

//showBookD.innerHTML = myObj.data[0].id;

//////////////////////////////////////////////////////////////////////////////

// CHANGE BOOKS //////////////////////////////////////////////////////////////

//http://www.forverkliga.se/JavaScript/api/crud.php?op=update&key=PgRh4&id=%22%22&title=%22AAAAA%22&author=%22Matat%22

function change() {
	var idOfid = document.getElementById("bookID").value;
	var title = document.getElementById("AuthorC").value;
	var author = document.getElementById("bookName").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			console.log("http://www.forverkliga.se/JavaScript/api/crud.php?op=update&key=" + key + "&id='" + idOfid + "'&title='" + title + "'&author='" + author + "'");
			console.log(this.responseText);

		}


	};
	xhttp.open("POST", "http://www.forverkliga.se/JavaScript/api/crud.php?op=update&key=" + key + "&id=" + idOfid + "&title=" + title + "&author=" + author , true);
	xhttp.send();



}
/////////////////////////////////////////////////////////////////////////////

// Delete ////////////////////////////////////////////////////////////////////


function remove() {
	var idrem = document.getElementById("removeBook").value;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			
			console.log(this.responseText);

		}


	};
	xhttp.open("POST", "http://www.forverkliga.se/JavaScript/api/crud.php?op=delete&key=" + key + "&id=" + idrem, true);
	xhttp.send();



}


//////////////////////////////////////////////////////////////////////////////