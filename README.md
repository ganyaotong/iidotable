# iidotable
table.js is a library for DOM element generator
```html
<table id="page">
</table>
```
``` javascript
<script>
	var th = ['订单ID',"数量","总金额","日期","订单状态"];
	var td = ['123618273786',"222","2345315","2017-9-30","已发货"];
	var table = new iidoTable('page');
	table.trs.push(table.tr.td(td).make());
	table.trs.push(table.tr.th(th).make());
	table.install();
</script>
```