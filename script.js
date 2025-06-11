function updateCounter() {
    const startDate = new Date('2025-03-13T00:00:00');
    const now = new Date();
    const elapsedTime = now - startDate;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60) % 24;
    const days = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

