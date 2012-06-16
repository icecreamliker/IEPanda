/*****************************************
 * author: yaoli<yaoli111144@gmail.com>
 * time:   2012-6-13
 * desc:   js for index.html
 ******************************************/
function yaoli(){
	console.log('yaoli2')
	return ['sssssssssssssssssssssssssssdxujifu','ldinfeng','haordddddden'];

}

$(document).ready(function(){
  //	$('.search-btn').click(function(ev){
  		

 // 	});

  	$('#J-search').typeahead({
  		source: ["Alaska","Arizona","Arkansas","California","Colorado","Connecticut","姚立","压力2","Alabama"],
  		items: 8,
  		matcher: function(item){return true;},//这个是为了让其不过滤，直接返回从ajax传过来的信息
  		sorter: function(items){return items;},//这个是为了不让其排序，直接返回从ajax传过来的信息
  		onselect: function(val){
  			alert(val)
  		},
  		onchange: function(query, fn){
  			var _source = ['linfeng','zhouzixin','xujifu','yaoli'];
  			
  			if(query == 's')
  				_source = ['xujifu','linfeng','haoren'];
  			if(query == 'd')
  				_source = ['dxujifu','ldinfeng','haordddddden'];
			if(query == 'sd')
  				_source = ['sssssssssssssssssssssssssssdxujifu','ldinfeng','haordddddden'];

  			//setTimeout('yaoli()',3000);
  			fn.call(this, _source)

  			
  		}
  	});

});
