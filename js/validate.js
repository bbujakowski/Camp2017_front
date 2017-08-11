document.addEventListener('DOMContentLoaded', function () {
    (function () {

        const button = document.querySelector('#submit-button');
        const input = document.querySelector('#input-password');

        button.addEventListener("click", function(event) {
			// unikamy zostawiania console.logów w kodzie
            console.log(input.value);

			// skoro używasz const'ów to polecem tutaj użyc 'let' a o czymś takim jak
			// var zapomniec, że istnieje =) Pozatym alert nie jest najlepszą nazwą
			// bo pokrywa się z natywną funkcją alert()
            var alert = document.querySelector('#password-alert');

            if (input.value.length < 8) {
				alert.innerHTML = "Password is too short. It has to be at least 8 characters long!";
				// spyrytne, ale kilkukrotne wywołanie funkcji sprawi, że będziemy miec wiele powtórzeń error'ów
        		input.className += ' error';
	        }
	        if (input.value === '') {
	        	alert.innerHTML = "Please enter your password";
	        	input.className += ' error';
	        } else {
	        	console.log(window.location);
	        	window.location.href = 'index.html';
	        }
		});
		// zbędne entery =)




    })();
})

//pobrac wartosc hasla
//walidacja: zczytanie pola hasla, przygotowanie instrukcji war ktora sprawdz czy pola sa wypelnione, jezeli ktores nie jest
//dodaj np klase error(obramowanie na czerwono), jezeli wszystkie pola wprowadzone to zmien lokalizacje na index.html