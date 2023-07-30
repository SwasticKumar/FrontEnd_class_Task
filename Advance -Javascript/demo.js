window.onload = function () {
    let countdown = document.getElementById("countdown");
    let statement = document.getElementById("statement");
    statement.style.visibility = "hidden";

    countdown.innerHTML = 10;
    setTimeout(function () 
    {
      countdown.innerHTML = 9;
      setTimeout(function () 
      {
        countdown.innerHTML = 8;
        setTimeout(function () 
        {
          countdown.innerHTML = 7;
          setTimeout(function () 
          {
            countdown.innerHTML = 6;
            setTimeout(function () 
            {
              countdown.innerHTML = 5;
              setTimeout(function () 
              {
                countdown.innerHTML = 4;
                setTimeout(function () 
                {
                  countdown.innerHTML = 3;
                  setTimeout(function () 
                  {
                    countdown.innerHTML = 2;
                    setTimeout(function () 
                    {
                      countdown.innerHTML = 1;
                      setTimeout(function () 
                      {
                        countdown.style.visibility = "hidden";
                        statement.style.visibility = "visible";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };