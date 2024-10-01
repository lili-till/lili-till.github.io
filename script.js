function createMenu() {
    const menuList = document.getElementById('menuList');
    const headings = document.querySelectorAll('h2'); 

    headings.forEach((heading, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        let sectionId = heading.id;
        if (!sectionId) {
            sectionId = `section${index + 1}`;
            heading.setAttribute('id', sectionId);
        }

        link.href = `#${sectionId}`;
        link.innerText = heading.innerText;

        listItem.appendChild(link);
        menuList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', createMenu);

document.documentElement.style.scrollBehavior = 'smooth';

var category = 'technology'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY', 'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



                  
