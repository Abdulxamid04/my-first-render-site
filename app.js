let container = document.querySelector('container')


class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(err => alert(err)).then(data => console.log(data))
    }

    static renderUserData(data){
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class = "card-head">
            <a href = "mailto:${user.email}"><i class = "fas fa-envelope"></i> Email</a>
            <div class = "user-image">
                <img src = "${user.picture.large}" alt = "">
            </div>
        </div>

        <div class = "card-body">
            <div class = "user-name">
                <span class = "user-name-title">${user.name.title}.</span>
                <span class = "user-name-full">${user.name.first} ${user.name.last},</span>
                <span class = "user-age">${user.dob.age}</span>
            </div>

            <div class = "user-location-address">
                <span>${user.location.city}, ${user.location.state}, ${user.location.country}</span>
            </div>
        </div>

        <div class = "card-foot">
            <div class = "user-contact-info">
                <span>
                    <i class = "fas fa-phone"></i> ${user.phone}
                </span>
                <span>
                    <i class = "fa-solid fa-mobile-button"></i> ${user.cell}
                </span>
            </div>
        </div>
        `;
    }
}

let comments = [
        {
          id: 51,
          name: 'molestias et odio ut commodi omnis ex',
          email: 'Laurie@lincoln.us',
          body: 'perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas',
        },
        {
          id: 52,
          name: 'esse autem dolorum',
          email: 'Abigail.OConnell@june.org',
          body: 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus',
        },
        {
          id: 53,
          name: 'maiores alias necessitatibus aut non',
          email: 'Laverne_Price@scotty.info',
          body: 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum',
        },
        {
          id: 54,
          name: 'culpa eius tempora sit consequatur neque iure deserunt',
          email: 'Kenton_Vandervort@friedrich.com',
          body: 'et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo',
        },
        {
          id: 55,
          name: 'quas pariatur quia a doloribus',
          email: 'Hayden_Olson@marianna.me',
          body: 'perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam',
        }
]

 

document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});

RandomUser.fetchFromAPI();