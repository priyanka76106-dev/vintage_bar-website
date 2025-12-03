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
// bradn

   const brands = [
        { name: "Jack Daniel's", type: "Whiskey", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400" },
        { name: "Johnnie Walker", type: "Whiskey", image: "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?w=400" },
        { name: "Jameson", type: "Whiskey", image: "https://images.unsplash.com/photo-1584370848010-cf61e8c65a01?w=400" },
        { name: "Chivas Regal", type: "Whiskey", image: "https://images.unsplash.com/photo-1600180758890-6f6431e52a41?w=400" },
        { name: "Smirnoff", type: "Vodka", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400" },
        { name: "Grey Goose", type: "Vodka", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400" },
        { name: "Absolut", type: "Vodka", image: "https://images.unsplash.com/photo-1617139651283-14e404273bb0?w=400" },
        { name: "Bacardi", type: "Rum", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400" },
        { name: "Captain Morgan", type: "Rum", image: "https://images.unsplash.com/photo-1621996349842-788ed0f2ec52?w=400" },
        { name: "Budweiser", type: "Beer", image: "https://images.unsplash.com/photo-1608043892067-5f24ab2c45dd?w=400" },
        { name: "Heineken", type: "Beer", image: "https://images.unsplash.com/photo-1607681034644-c1f3e2dfc4ce?w=400" },
        { name: "Corona", type: "Beer", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
        { name: "Kingfisher", type: "Beer", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400" },
        { name: "Patron", type: "Tequila", image: "https://images.unsplash.com/photo-1552553037-a37430bbf2cb?w=400" },
        { name: "Jose Cuervo", type: "Tequila", image: "https://images.unsplash.com/photo-1608534507565-98ec6633b457?w=400" },
        { name: "Tanqueray", type: "Gin", image: "https://images.unsplash.com/photo-1616353073217-3221b42d0021?w=400" },
        { name: "Bombay Sapphire", type: "Gin", image: "https://images.unsplash.com/photo-1621996348339-7a1be11e0633?w=400" },
        { name: "Red Wine", type: "Wine", image: "https://images.unsplash.com/photo-1578596860774-abb06e5d2a9a?w=400" },
        { name: "White Wine", type: "Wine", image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400" }
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
