let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        const dotsContainer = document.getElementById('dots');

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            const carousel = document.getElementById('carousel');
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function moveSlide(direction) {
            currentSlide += direction;
            
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-advance carousel
        setInterval(() => {
            moveSlide(1);
        }, 5000);

        // Initialize
        updateCarousel();

        // Booking form functions
        function openBookingForm(eventType) {
            document.getElementById('bookingModal').style.display = 'block';
            document.getElementById('eventType').value = eventType;
            document.body.style.overflow = 'hidden';
        }

        function closeBookingForm() {
            document.getElementById('bookingModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function submitBooking(event) {
            event.preventDefault();
            
            const formData = {
                eventType: document.getElementById('eventType').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                guests: document.getElementById('guests').value,
                message: document.getElementById('message').value
            };
            
            alert(`Thank you for your booking request, ${formData.name}!\n\nEvent: ${formData.eventType}\nDate: ${formData.date}\nGuests: ${formData.guests}\n\nWe will contact you shortly at ${formData.email} to confirm your reservation.`);
            
            closeBookingForm();
            document.getElementById('bookingForm').reset();
        
        }

        // ======================
// MOBILE MENU
// ======================

function toggleMenu(){
    let links = document.querySelector(".nav-links");
    links.classList.toggle("active");
}


// ======================
// BOOKING MODAL
// ======================

function openBookingForm(type){
    document.getElementById("eventType").value = type;
    document.getElementById("bookingModal").style.display = "block";
}

function closeBookingForm(){
    document.getElementById("bookingModal").style.display = "none";
}

// close when clicking outside
window.onclick = function(e){
    let modal = document.getElementById("bookingModal");
    if(e.target == modal){
        modal.style.display = "none";
    }
}


// ======================
// FORM SUBMIT
// ======================

function submitBooking(e){
    e.preventDefault();

    alert("Booking Request Sent Successfully ✅");

    closeBookingForm();
}

// bradn

   const brands = [
        { name: "Jack Daniel's", type: "Whiskey", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjDgfIiOnEena3bxxQGsfWymn2INpU0z2lw&s" },
        { name: "Johnnie Walker", type: "Whiskey", image: "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?w=400" },
        { name: "Jameson", type: "Whiskey", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDEVSHxiEnpMMH_iZZq5sK5VeYkF4MWdm4A&s" },
        { name: "Chivas Regal", type: "Whiskey", image: "https://drinksenthusiast.com/wp-content/uploads/2014/08/chivas-regal.jpeg" },
        { name: "Smirnoff", type: "Vodka", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400" },
        { name: "Grey Goose", type: "Vodka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQkE8IC_Hhl2HAbbZO0dMzuzzF--heiSXSQ&s" },
        { name: "Absolut", type: "Vodka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd3zSr978b06C54w0nNAxleVZ7H-dUghrkQ&s" },
        { name: "Bacardi", type: "Rum", image: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666974845_bacardi.jpg" },
        { name: "Captain Morgan", type: "Rum", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJo7qT4XxuhGnp3RQ1latYKz365tiaRdlxcA&s" },
        { name: "Budweiser", type: "Beer", image: "https://images.picxy.com/cache/2019/11/8/fcb5c7d143d088ace5928f3df98c2b2c.jpg" },
        { name: "Heineken", type: "Beer", image: "https://fortune.com/img-assets/wp-content/uploads/2016/01/181323297.jpg?w=1440&q=75" },
        { name: "Corona", type: "Beer", image: "https://images.pexels.com/photos/16229687/pexels-photo-16229687/free-photo-of-bottle-of-corona-beer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Kingfisher", type: "Beer", image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201804/kingfisher-beer_660_041918082956.jpg?size=948:533" },
        { name: "Patron", type: "Tequila", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS322_6QWwRZMu7acxWqyNzVKqSJqh-nCfnvA&s" },
        { name: "Jose Cuervo", type: "Tequila", image: "https://arthurcantina.com/cdn/shop/files/Jose_Cuervo_Tradicional_Reposado_750mL_-_Arthur_Cantina_Wine_Liquor_-_-_tag1_-_tag2_-2694294.jpg?v=1724541759&width=480" },
        { name: "Tanqueray", type: "Gin", image: "https://whisky.my/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/TANQUERAY-No.10-Gin-11.jpg" },
        { name: "Bombay Sapphire", type: "Gin", image: "https://s3.ap-southeast-1.amazonaws.com/cdn1.sgliteasset.com/theliquo/images/texteditor/bombay_sapphire_1709179285.jpg" },
        { name: "Red Wine", type: "Wine", image: "https://cms.cdn4vest.com/images/sweet-red-wine-for-beginners-1.width-800.jpg" },
        { name: "White Wine", type: "Wine", image: "https://worldwine.com.au/cdn/shop/articles/6386686.webp?v=1651229200&width=1024" }
    ];

    function createBrandCard(brand) {
        return `
            <div class="brand-card">
                <img class="brand-image" src="${brand.image}">
                <div class="brand-name-box">
                    <div class="brand-name">${brand.name}</div>
                    <div class="brand-type">${brand.type}</div>
                </div>
            </div>
        `;
    }

    function renderBrands() {
        const scroll = document.getElementById("brandsScroll");
        for (let i = 0; i < 3; i++) {
            brands.forEach(brand => {
                scroll.innerHTML += createBrandCard(brand);
            });
        }
    }

    document.addEventListener("DOMContentLoaded", renderBrands);
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('bookingModal');
            if (event.target == modal) {
                closeBookingForm();
            }
        }
    function openBookingForm(eventType) {
    document.getElementById("bookingModal").style.display = "block";
    document.getElementById("eventType").value = eventType;
}

function closeBookingForm() {
    document.getElementById("bookingModal").style.display = "none";
}

function submitBooking(e) {
    e.preventDefault();
    alert("Your booking request has been submitted!");
    closeBookingForm();
}

// Close modal if clicked outside
window.onclick = function (e) {
    let modal = document.getElementById("bookingModal");
    if (e.target === modal) closeBookingForm();
};

// brand
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
