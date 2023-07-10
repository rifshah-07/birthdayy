const targetDate = new Date("2023-07-14");

    function updateCountdown() {
      const currentDate = new Date();
      const timeLeft = targetDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Update the countdown display
      document.querySelector(".days").textContent = `${days}d`;
      document.querySelector(".hours").textContent = `${hours}h`;
      document.querySelector(".minutes").textContent = `${minutes}m`;
      document.querySelector(".seconds").textContent = `${seconds}s`;

      // Update every second
      setTimeout(updateCountdown, 1000);
    }

    // Start the countdown
    updateCountdown();