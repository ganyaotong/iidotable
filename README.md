# iidotable
table.js is a library for DOM element generator

## HOW IT WORK?
here is html, you need to set id
```html
<table id="page">
</table>
```

here is javascript
``` javascript
<script>
	var th = ['订单ID',"数量","总金额","日期","订单状态"];
	var td = ['123618273786',"222","2345315","2017-9-30","已发货"];
	
	var table = new iidoTable('page');

	/* set style */
	var headClass = new Object();
	var bodyClass = new Object();
	headClass.tr = "class1";
	headClass.th = "class2";
	bodyClass.tr = "class11";
	bodyClass.td = "class22";
	table.css().head(headClass);
	table.css().body(bodyClass);
	/* end style */

	table.trs.push(table.tr.td(td).make());
	table.trs.push(table.tr.th(th).make());
	table.install();
</script>
```

here is output
``` html
<table id="page">
	<tbody>
	<tr class="class1">
		<th class="class2">订单状态</th>
		<th class="class2">日期</th>
		<th class="class2">总金额</th>
		<th class="class2">数量</th>
		<th class="class2">订单ID</th>
	</tr>
	<tr class="class11">
		<td class="class22">已发货</td>
		<td class="class22">2017-9-30</td>
		<td class="class22">2345315</td>
		<td class="class22">222</td>
		<td class="class22">123618273786</td>
	</tr>
	</tbody>
</table>
```