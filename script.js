// Set the target date
const targetDate = new Date("August 1, 2025 23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Time's up!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `<b>Project 1 completed:<br>t.me/PiragovUNI</b><br><br>Project 2: coming soon<br>${days} days`;
   // `${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`;
}, 1000);
