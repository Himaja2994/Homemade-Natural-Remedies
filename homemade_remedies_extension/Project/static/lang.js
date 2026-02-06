function setLanguage(lang) {
    fetch(`/static/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            for (const id in data) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerText = data[id];
                }
            }
        });
}
