precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadText = document.querySelector('.cantidad')
cantidadFinal = Number(cantidadText.innerHTML)

texto = document.querySelector('.valor-total')
valorFinal = Number(texto.innerHTML)
valorFinal = precio * cantidadFinal
texto.innerHTML = valorFinal


