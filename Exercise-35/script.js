    function changeImage() {
            const image = document.querySelector('.img')

            const url = prompt('Enter your image URL here:')
            image.setAttribute('src', url)

            const width = prompt('Enter the width of the image (e.g., 500):')
            image.setAttribute('width', width)

            const height = prompt("Enter the height of the image (e.g., 400):")
            image.setAttribute('height', height)

            const borderColor = prompt('Enter the border color (e.g., red, #000):')

            image.style.border = `5px solid ${borderColor}`


            const borderRadius = prompt('Enter border radius (e.g., 20px or 50%):')

            image.style.borderRadius = borderRadius

        }