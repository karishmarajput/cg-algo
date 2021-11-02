
function showDda(){
    document.getElementById('container1').style.display = "block";
    document.getElementById('container2').style.display ="none";
    document.getElementById('container3').style.display ="none";
}
function showBresenham(){
    document.getElementById('container2').style.display = "block";
    document.getElementById('container1').style.display ="none";
    document.getElementById('container3').style.display ="none";
}
function display(){
    let x1= 0, x2=4,y1 = 0,y2 = 6;
    x1 = parseInt(document.getElementById('x1').value);
    x2 = parseInt(document.getElementById('x2').value);
    y1 = parseInt(document.getElementById('y1').value);
    y2 = parseInt(document.getElementById('y2').value);
    let dx = x2-x1;
    let steps;
    let dy = y2 - y1;
    let xArr = new Array();
    let yArr = new Array();
    if(dx < 0)dx *= -1;
    if(dy < 0)dy *= -1;
    if(dx >dy){
        steps = dx;
    }else{
        steps = dy;
    }
    let xin = dx/steps;
    let yin = dy/steps;
    document.getElementById('data').innerHTML='<p> Step 1:<br>dx = |x2 - x1|= |'+x2+'-'+x1+'| = '+dx+'<br>dy = |y2 - y1|= |'+y2+'-'+y1+'| = '+dy+'<br>'+
    'Step 2:<br>steps = '+steps+'<br>Step 3:<br> X increment = dx/steps = '+dx+'/'+steps+' = '+xin.toFixed(3)+'<br>'+
    'Y increment = dy/steps = '+dy+'/'+steps+' = '+yin.toFixed(3)+'<br>Step 4: Table '+
    '<table class="table table-striped"><thead><td>iteration</td><td>x</td><td>y</td><td>x-plot</td><td>y-plot</td></thead><tbody id ="table"></tbday></table><br>Step 5: Plot<br>';
    let i = 0;
    let tableHtml = '';
    while(i < steps+1){
        tableHtml +='<tr><td>'+i+'</td><td>'+x1.toFixed(3)+'</td><td>'+y1.toFixed(3)+'</td><td>'+Math.round(x1)+'</td><td>'+Math.round(y1)+'</td>';
        xArr.push(Math.round(x1));
        yArr.push(Math.round(y1));
        x1 += xin;
        y1 += yin;
        console.log(x1);
        console.log(y1)
        i++;
        
    }
    document.getElementById('table').innerHTML = tableHtml;
    console.log(xArr);
    console.log(yArr);
    var data = [{
        x: xArr,
        y: yArr,
        mode:"lines"
      }];
    var layout = {
        xaxis: {range: [0, x2], title: "X-axis"},
        yaxis: {range: [0, y2], title: "Y-axis"},  
        title: "Graph"
    };
    Plotly.newPlot("myPlot", data, layout);     
}

function displayBresenham(){
    let x1= 20, x2=30,y1 = 10,y2 = 18;
    x1 = parseInt(document.getElementById('x1B').value);
    x2 = parseInt(document.getElementById('x2B').value);
    y1 = parseInt(document.getElementById('y1B').value);
    y2 = parseInt(document.getElementById('y2B').value);
    let dx = parseInt(Math.abs(x2 - x1));
    let dy = parseInt(Math.abs(y2 - y1));
    let xArr = new Array();
    let yArr = new Array();
    let p = 2* dy -dx;
    let step = dx,i = 0,pActual = p;
    document.getElementById('data1').innerHTML = '<p>Step 1:<br> dx = '+ dx+'<br>dy = '+ dy+'<br>'+
    '2dy - 2dx = 2*'+dy+' - 2*'+dx+'= '+ (2*dy -2*dx)+'<br>'+
    '2dy = 2*'+dy+'= '+ (2*dy)+'<br>'+
    'p0 = 2dy - dx ='+2* dy +'-'+dx+'='+(2*dy - dx)+'<br></p>'+
    '<table class="table table-striped"><thead><td>k</td><td>pk</td><td>Xk+1</td><td>Yk+1</td></thead><tbody id ="table1"></tbday></table><br>Step 5: Plot<br>'; 
    let tableHtml ='';
    while(i < step){
        if(p < 0){
            x1 +=1;
            p += 2*dy;
            xArr.push(x1);
            yArr.push(y1);
        }else{
            x1 +=1;
            y1 +=1;
            p += (2*dy - 2*dx);
            xArr.push(x1);
            yArr.push(y1);
        }
        tableHtml +='<tr><td>'+i+'</td><td>'+pActual+'</td><td>'+x1+'</td><td>'+y1+'</td>';
        pActual = p;
        i++;
    }
    document.getElementById('table1').innerHTML = tableHtml;
    var data = [{
        x: xArr,
        y: yArr,
        mode:"lines"
      }];
    var layout = {
        xaxis: {range: [0, x2], title: "X-axis"},
        yaxis: {range: [0, y2], title: "Y-axis"},  
        title: "Graph"
    };
    Plotly.newPlot("myPlot1", data, layout); 

}

function showMpCircle(){
    document.getElementById('container3').style.display = "block";
    document.getElementById('container2').style.display ="none";
    document.getElementById('container1').style.display ="none";
}
function displayMpCircle(){
    document.getElementById('coordinateCircle').style.display = "block";
    let x0, y0,r;
    let xArr = new Array();
    let yArr = new Array();
    x0 = parseInt(document.getElementById('x0c').value);
    y0 = parseInt(document.getElementById('y0c').value);
    r = parseInt(document.getElementById('radius').value);
    let x =0, y = r, p = 1-r;
    xArr.push(x+x0);
    yArr.push(y+y0);
    document.getElementById('data2').innerHTML = '<p>Step 1:<br> 2x0 = '+ 2*x0+'<br>2y0 = '+ 2*y0+'<br>'+
    'p = '+p+'<br>'+
    '<table class="table table-striped"><thead><td>k</td><td>pk</td><td>(Xk+1,Yk+1)<br> 1st Qctand</td><td>2Xk+1</td><td>2Yk+1</td></thead><tbody id ="table2"></tbday></table>'; 
    let tableHtml ='', i =0,pActual = p,coordinateTable = '';
    while( x < y){
        if( p < 0){
            x++;
            p = p + 2 * x + 1;
        }else{
            x++;
            y--;
            p = p+2*x+1-2*y;     
        }
        xArr.push(x+x0);
        yArr.push(y+y0);
        tableHtml +='<tr><td>'+i+'</td><td>'+pActual+'</td><td>('+x+','+y+')'+'</td><td>'+2*x+'</td><td>'+2*y+'</td>';
        coordinateTable += '<tr><td>('+(x+x0)+','+(y+y0)+')</td><td>('+(y+y0)+','+(x+x0)+')</td><td>('+(y+y0)+','+(-x+x0)+')</td><td>('+(x+x0)+','+(-y+y0)+')</td><td>('+(-x+x0)+','+(-y+y0)+')</td><td>('+(-y+y0)+','+(-x+x0)+')</td><td>('+(-y+y0)+','+(x+x0)+')</td><td>('+(-x+x0)+','+(y+y0)+')</td>';
        pActual = p;
        i++;
    }
    document.getElementById('table2').innerHTML = tableHtml;
    document.getElementById('tableCircle').innerHTML = coordinateTable;
    console.log(xArr);
    console.log(yArr);
    
    var data = [{
        x: xArr,
        y: yArr,
        mode:"lines"
    }];
    var layout = {
        xaxis: {range: [0, r+x0], title: "X-axis"},
        yaxis: {range: [0, r+y0], title: "Y-axis"},  
        title: "1st Qctand"
    };
    Plotly.newPlot("myPlot2", data, layout); 
}