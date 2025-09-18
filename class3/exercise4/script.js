// Change the background color of the page when a button is clicked
const button = document.getElementById('change-background-button');
button.addEventListener('click', function() {
    document.querySelector('body').style.background = 'red';
})


// Display the text entered in an input field in real-time
const input = document.getElementById('input-text');
input.addEventListener('change', function (event) {

    const textValue = event.currentTarget.value;
    console.log(textValue);

    const previewText = document.getElementById('preview-text');
    previewText.innerText = textValue;
});


// Change the text color of a paragraph when the mouse hovers over it
// addEventListener('mouseover')