document.getElementById('btn').addEventListener('click', () => {
    
    fetch('https://bhagavadgitaapi.in/slok?api_key=6c95794f5d7c155ef')
    .then((response) => {
        return response.json();
    })
    .then(result => {
        var chapter=document.createElement('h4');
        chapter.innerHTML = "Chapter: "+result.chapter;
        var slok=document.createElement('h4');
        slok.innerHTML = "Slok: "+result.verse;
        var slokText=document.createElement('div');
        slokText.innerText=result.slok;
        var trans=document.createElement('h4');
        trans.innerText="Transliteration";
        var transText=document.createElement('div');
        transText.innerText=result.transliteration;
        var slokBody=document.getElementById('slok1');
        slokBody.append(chapter,slok,slokText,trans,transText); 
    })
    .catch(err => console.log(err));
})

document.getElementById('btn1').addEventListener('click', () => {

    var param1=document.getElementById('chapter')
    var param2=document.getElementById('slok');
    if(param1.value==="" || param2.value== ""){
        alert("Please enter Valid chapter and Shloka Numbers");
    }
    else{
            var ch=document.getElementById('chapter').value;
            var sl=document.getElementById('slok').value;
            var url='https://bhagavadgitaapi.in/slok/'+ch+'/'+sl+'?api_key=6c95794f5d7c155ef';
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(result => {
                var chapter=document.createElement('h4');
                chapter.innerHTML = "Chapter: "+result.chapter;
                var slok=document.createElement('h4');
                slok.innerHTML = "Slok: "+result.verse;
                var slokText=document.createElement('div');
                slokText.innerText=result.slok;
                var trans=document.createElement('h4');
                trans.innerText="Transliteration";
                var transText=document.createElement('div');
                transText.innerText=result.transliteration;
                var slokBody=document.getElementById('slok2');
                slokBody.append(chapter,slok,slokText,trans,transText);
            })
            .catch(err => console.log(err));
        }
})


document.getElementById('clear2').addEventListener('click',() => {
    document.getElementById('slok2').innerHTML='';
})

document.getElementById('clear1').addEventListener('click',() => {
    document.getElementById('slok1').innerHTML='';
})