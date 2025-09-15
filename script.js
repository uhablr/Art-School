// show More Services
function showMoreServices() {
    // Recover all hidden services
    const hiddenServices = document.querySelectorAll('.service:not(#service-1)');

    // View each hidden service
    hiddenServices.forEach(service => {
        service.style.display = 'block';
    });

    // Hide button
    document.getElementById('show-more').style.display = 'none';
}