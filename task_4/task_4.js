const status = document.querySelector('#status');

const btn = document.querySelector('.j-btn-test');
const data = document.querySelector('#data');

btn.onclick = function (event) {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let pos = position;
      fetch(
        `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`,
      )
        .then((timeApi) => {
          return timeApi.json();
        })
        .then((timeApi) => {
          status.value = `Часовой пояс: ${timeApi.timezone}`;
          data.value = `Местное время: ${timeApi.date_time_txt}`;
        });
    });
  }
};
