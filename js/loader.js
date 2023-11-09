var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 17;
	ctx.fillStyle = '#4285f4';
	ctx.strokeStyle = "#4285f4";
	ctx.textAlign = "center";
	ctx.font="28px monospace";
	ctx.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
	ctx.beginPath();
	ctx.arc(100, 100, 75, start, diff/10+start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
	    // Add scripting here that will run when progress completes
	
	
		const jsConfetti = new JSConfetti()

		jsConfetti.addConfetti();
	}
	al++;
}






// برمجية اختيار الرابح

const win = document.querySelector("#winner");
 const lodar = document.querySelector("lodar-con");

 var mymodal = new bootstrap.modal(document.getElementById('modal'),{
  Keyboard: false
});
 win.addEventListener('click', function(){
  lodar.computedStyleMap.display = 'block';
  var sim = setInterval(progressSim, 20);
  
 });