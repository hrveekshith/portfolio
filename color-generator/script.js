function clr_generate(){
    const gen_color = "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");

    document.body.style.backgroundColor = gen_color;

    document.getElementById("disp-text-1").innerText = gen_color;

}