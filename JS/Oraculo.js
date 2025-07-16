const veredictos = [
            "Vos, el de la remera negra, confesá un secreto o tomás 3.",
            "Decime tu crush del grupo o te hacés un shot de lo que haya más cerca.",
            "Mostrá tu historial de Google o regalá tu prenda favorita de lo que tenés puesto.",
            "Inventate un apodo hot para vos mismo y usalo hasta el final del juego.",
            "Chupale el cuello a alguien o decí en voz alta tu última fantasía sexual.",
            "Besá al que esté a tu izquierda o tomás 5 sin respirar.",
            "Mandale un emoji sugerente al último contacto que no sea familia o te vas quedando sin medias.",
            "Actuá cómo gemís o alguien lo hace por vos y comparan.",
            "Tocá el pecho o culo de alguien con consentimiento, o pasás una ronda con los ojos vendados.",
            "Contá tu peor experiencia sexual o dejás que otro te invente una y la actuás.",
            "Le mandás un audio a alguien diciendo 'la pasé increíble anoche' y no podés explicar nada hasta mañana.",
            "Comé algo sin usar las manos o dejás que alguien te dé de comer lo que quiera.",
            "Contá una vez que estuviste con alguien y después descubriste algo turbio.",
            "Hacete un striptease de 10 segundos o te lo hace otro por vos.",
            "Mandale un mensaje a tu ex diciendo 'todavía pienso en vos' o te tocás la nariz cada vez que hablás por el resto del juego.",
            "Decí quién creés que es el mejor en la cama del grupo o dejás que te elijan pareja para un baile lento.",
            "Parate, cerrá los ojos y dejá que alguien te bese donde quiera (sin pasar la raya obvio).",
            "El que tenga menos ropa ahora tiene el poder de hacerte cualquier pregunta incómoda.",
            "Contá una vez que mentiste para tener sexo o inventate una historia tan creíble que el grupo no sepa si fue real.",
            "Si tenés más de 3 apps de citas instaladas, tomás 2. Si no, mostrás tu galería.",
            "Mostrá tu outfit interior (sin sacarte nada) o que alguien más lo describa como se lo imagina.",
            "Tenés 10 segundos para seducir al que tenés más cerca. Si no se ríe, tomás vos. Si se ríe, toma él/ella.",
            "Le pasás el celu a alguien al azar para que publique una historia y no podés borrarla por 1 hora.",
            "Actuá cómo seducís a alguien por mensaje usando solo una frase. Si nadie se calienta, prenda menos.",
            "Pedile a alguien del grupo que te dé una nalgada. Si se niega, ambos toman doble.",
            "Nombrá a dos personas que te cogerías del grupo, pero con una excusa que lo justifique.",
            "Contá tu fetiche más raro o hacé una demostración improvisada.",
            "Hacé una pose tipo revista de gimnasio y mantenela hasta que alguien te saque foto.",
            "Elegí a alguien para tener 'mirada intensa' por 30 segundos. Si alguien parpadea, toma.",
            "Decí a quién te besarías si estuvieran solos esta noche. Si no respondés, te besan a vos.",
            "Vos, el de la remera negra, confesá un secreto o tomás 3",
            "Decime tu crush del grupo o te hacés un shot de lo que haya más cerca",
            "Mostrá tu historial de Google o regalá tu prenda favorita de lo que tenés puesto",
            "Inventate un apodo hot para vos mismo y usalo hasta el final del juego",
            "Chupale el cuello a alguien o decí en voz alta tu última fantasía sexual",
            "Besá al que esté a tu izquierda o tomás 5 sin respirar",
            "Mandale un emoji sugerente al último contacto que no sea familia o te vas quedando sin medias",
            "Actuá cómo gemís o alguien lo hace por vos y comparan",
            "Tocá el pecho o culo de alguien con consentimiento, o pasás una ronda con los ojos vendados",
            "Contá tu peor experiencia sexual o dejás que otro te invente una y la actuás",
            "Le mandás un audio a alguien diciendo 'la pasé increíble anoche' y no podés explicar nada hasta mañana",
            "Comé algo sin usar las manos o dejás que alguien te dé de comer lo que quiera",
            "Contá una vez que estuviste con alguien y después descubriste algo turbio",
            "Hacete un striptease de 10 segundos o te lo hace otro por vos",
            "Mandale un mensaje a tu ex diciendo 'todavía pienso en vos' o te tocás la nariz cada vez que hablás por el resto del juego",
            "Decí quién creés que es el mejor en la cama del grupo o dejás que te elijan pareja para un baile lento",
            "Parate, cerrá los ojos y dejá que alguien te bese donde quiera (sin pasar la raya obvio)",
            "El que tenga menos ropa ahora tiene el poder de hacerte cualquier pregunta incómoda",
            "Contá una vez que mentiste para tener sexo o inventate una historia tan creíble que el grupo no sepa si fue real",
            "Si tenés más de 3 apps de citas instaladas, tomás 2, si no, mostrás tu galería",
            "Mostrá tu outfit interior (sin sacarte nada) o que alguien más lo describa como se lo imagina",
            "Tenés 10 segundos para seducir al que tenés más cerca, si no se ríe, tomás vos, si se ríe, toma él/ella",
            "Le pasás el celu a alguien al azar para que publique una historia y no podés borrarla por 1 hora",
            "Actuá cómo seducís a alguien por mensaje usando solo una frase, si nadie se calienta, prenda menos",
            "Pedile a alguien del grupo que te dé una nalgada, si se niega, ambos toman doble",
            "Nombrá a dos personas que te cogerías del grupo, pero con una excusa que lo justifique",
            "Contá tu fetiche más raro o hacé una demostración improvisada",
            "Hacé una pose tipo revista de gimnasio y mantenela hasta que alguien te saque foto",
            "Elegí a alguien para tener 'mirada intensa' por 30 segundos, si alguien parpadea, toma",
            "Decí a quién te besarías si estuvieran solos esta noche, si no respondés, te besan a vos",
        ];

        const oraculoBtn = document.getElementById('oraculo-btn');
        const veredictoElement = document.getElementById('veredicto');

        oraculoBtn.addEventListener('click', function () {

            oraculoBtn.disabled = true;
            oraculoBtn.classList.add('opacity-50');

            veredictoElement.textContent = "El Oráculo está decidiendo tu destino...";
            veredictoElement.classList.remove('neon-blue', 'neon-pink', 'neon-purple');


            const colors = ['neon-blue', 'neon-pink', 'neon-purple'];
            let counter = 0;
            const colorInterval = setInterval(() => {
                veredictoElement.classList.remove(...colors);
                veredictoElement.classList.add(colors[counter % colors.length]);
                counter++;
            }, 200);


            setTimeout(() => {
                clearInterval(colorInterval);

                const randomIndex = Math.floor(Math.random() * veredictos.length);
                const veredicto = veredictos[randomIndex];


                veredictoElement.textContent = veredicto;
                veredictoElement.classList.remove(...colors);
                veredictoElement.classList.add('neon-pink');


                oraculoBtn.disabled = false;
                oraculoBtn.classList.remove('opacity-50');
            }, 1500);
        });