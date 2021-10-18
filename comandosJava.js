
    const subtitulos = document.querySelectorAll('h2');
    const topicos = new Array();
    subtitulos.forEach(subtitulo => {
        topicos.push(subtitulo.textContent);
    });
    lista = document.querySelector('ol');
    topicos.forEach(topico => {
        const paradinha = document.createElement('li');
        paradinha.innerHTML = '<a href="#'+topico+'">' +topico+ '</a>';
        lista.append(paradinha);
    });
