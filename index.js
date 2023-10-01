javascript
document.getElementsByClassName('dropdown').addEventListener('click', function() {
    var selectedValue = this.value;
    var listItems = document.getElementsByClassName('dropdown-content').getElementsByTagName('a');

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === selectedValue) {
            selectedValue.innerHTML= listItems;
        } else {
            listItems[i].style.backgroundColor = 'white';
        }
    }
});