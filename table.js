/*
table.js is a library for DOM element generator.
*/

/* tr node */
var tr = function tr(){
	this.tr = new Object();
	this.env = new Object();
	return this;
}

tr.prototype.th = function(th) {
	var head = new RAM().get('head');
	for (var i = th.length - 1; i >= 0; i--) {
		th[i] = "<th class='"+head.th+"'>"+ th[i]+"</th>";
	}
	this.tr.e=th;
	this.env.isHead = true;
	return this;
};

tr.prototype.td = function(td) {
	var body = new RAM().get('body');
	for (var i = td.length - 1; i >= 0; i--) {
		td[i] = "<td class='"+body.td+"'>"+ td[i]+"</td>";
	}
	this.tr.e = td;
	this.env.isHead = false;
	return this;
};

tr.prototype.make = function() {
	var node = "";
	if (this.env.isHead) {
		var head = new RAM().get('head'); 
		node = "<tr class='"+head.tr+"'>";
	}else{
		var body = new RAM().get('body');
		node = "<tr class='"+body.tr+"'>";
	}
	for (var i = this.tr.e.length - 1; i >= 0; i--) {
		node += this.tr.e[i];
	}
	node += "</tr>";
	return node;
};
/* tr node end */


/* table object */
var table = function table(tableID){
	this.tableID = tableID;
	this.trs = [];
	return this;
}

table.prototype.css = function(){
	return this;
};

table.prototype.head = function(styleCalss){
	new RAM().set('head',styleCalss);
	return this;
};

table.prototype.body = function(styleCalss) {
	new RAM().set('body',styleCalss);
	return this;
};


table.prototype.tr = new tr();

table.prototype.install = function() {
	var html = "";
	for (var i = this.trs.length - 1; i >= 0; i--) {
		html += this.trs[i];
	}
	document.getElementById(this.tableID).innerHTML = html;
};
/* table object end */

// the main function 
function iidoTable(tableID){
	return new table(tableID);
}

/* demo
<table id="page">
</table>
<script>
	var th = ['订单ID',"数量","总金额","日期","订单状态"];
	var td = ['123618273786',"222","2345315","2017-9-30","已发货"];
	var table = new iidoTable('page');
	table.trs.push(table.tr.td(td).make());
	table.trs.push(table.tr.th(th).make());
	table.install();
</script>
*/
